import { Request, Response } from "express";

const errors = require('./components/errors');
const { name, version } = require('../package.json');
const logger = require('./components/logger/index');
const { requestLogger } = require('./components/logger/request');
const responseLogger = require('./components/logger/response');

const userRoute = require('./api/user');

module.exports = (app) => {
  const INTERNAL_SERVER_ERROR = 500;
  const NOT_FOUND = 404;
  // Insert routes below
  app.use(requestLogger);
  app.use(responseLogger());

  app.get('/api/health', (req: Request, res: Response) => res.json({ id: req.id, name, version }));
  app.use('/api/users', userRoute);

  // app.use(logger.transports.sentry.raven.errorHandler());

  // All undefined asset or api routes should rgit eturn a 404
  // eslint-disable-next-line no-unused-vars
  app.use((e, req: Request, res: Response, next) => {
    logger.error(`ERROR: ${e.message}`, {
      processingTime: res.get('X-Response-Time'),
      url: req.originalUrl,
      stackTrace: e.stack,
      method: req.method,
      requestHeader: req.headers,
      params: req.params,
      body: req.body,
      query: req.query,
    });
    return res
      .status(e.statusCode || e.code || INTERNAL_SERVER_ERROR)
      .json({ message: e.message, stack: e.stack });
  });

  // All undefined asset or api routes should return a 404
  app
    .route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[NOT_FOUND]);
};
