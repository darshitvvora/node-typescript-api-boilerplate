import { Response } from "express";

const logger = require('./index');
const { APP_NAME } = require('../../config/environment');
import { IExtendedRequestInfo } from "../../definition/IExtendedRequestInfo"


const requestLogger = (req: IExtendedRequestInfo, res: Response, next: any) => {
  logger.info(`REQUEST INFO: ${req.id}`, {
    startTime: new Date(),
    requestId: req.id,
    url: req.originalUrl,
    method: req.method,
    requestHeader: req.headers,
    requestParams: req.params,
    requestBody: req.body,
    requestQuery: req.query,
    appName: APP_NAME,
  });
  next();
};

module.exports = {
  requestLogger,
};
