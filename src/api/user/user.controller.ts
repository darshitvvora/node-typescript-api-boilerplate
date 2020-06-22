import { Request, Response } from "express";

const service = require('./user.service');
const db = require('../../conn/sqldb');

// const { BUCKET } = require('../../config/environment');
const messagesMap = {
  201: 'Your account created successfully.',
  409: 'Duplicate',
};

const { User } = db;
export default class UserCtrl {

/**
 * @api {post} /users Create a user
 * @apiDescription Create a user
 * @apiName createUser
 * @apiGroup User
 *
 * @apiParam (Body) {String} email User email.
 * @apiParam (Body) {String} password User password.
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {String} Status Message
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *  message: 'Your account created successfully.',
 *  id: 201
 * }
 *
 * {
 *  message: 'Duplicate',
 *  id: 209
 * }
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 *  {
 *    email: 'email is required'
 *  }
 */
public static async create(req: Request, res: Response, next: any) {
  try {
    const status = await service.signup(req.body);

    return res.json({ message: messagesMap[status.code], id: status.id });
  } catch (err) {
    return next(err);
  }
}

/**
 * @api {get} /users Find all users
 * @apiDescription Lists all user
 * @apiName getAllUser
 * @apiGroup User
 *
 * @apiSuccess {Array} List of user object
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * [{
 *  id: 1
 *  name: 'Demo user',
 *  email: 'demo@demo.com'
 * }]
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 */
public static async index(req: Request, res: Response, next: any) {
  try {
    const limit = 100;
    const offset = 0;

    const users = await User.findAll({
      limit,
      offset,
    });

    return res.json(users);
  } catch (err) {
    return next(err);
  }
}

/**
 * @api {get} /users/:id Get a single user
 * @apiDescription Get a single user
 * @apiName getUser
 * @apiGroup User
 *
 * @apiHeader {Authorization} Authorization JWT Token
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {Object}  User created.
 * @apiSuccess {String} user._id User _id.
 * @apiSuccess {String} user.name User Name.
 * @apiSuccess {String} user.email User email.
 *
 * @apiParam (Login) {String} pass Only logged in users can do this.
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *  "AUTHORIZATION": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey"
 * }
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *  _id: '123',
 *  name: 'name,
 *  email: 'demo@demo.com',
 *  createdAt: '2017-05-03',
 * }
 *
 * @apiErrorExample {json} Post not found
 *    HTTP/1.1 404 Not Found
 * @apiErrorExample {json} Unauthorized
 *    HTTP/1.1 401 Unauthorized
 */

public static  async getUser(req: Request, res: Response, next: any) {
  try {
    const user = await User.findOne({
      attributes: ['id', 'mobile', 'name', 'email'],
      where: { id: req.params.id },
      raw: true,
    });
    return res.json(user);
  } catch (err) {
    return next(err);
  }
}

/**
 * @api {put} /posts/:id Update a single user
 * @apiDescription Update a single user
 * @apiName getUser
 * @apiGroup User
 *
 * @apiHeader {Authorization} Authorization JWT Token
 *
 * @apiParam (Body) {String} email User email.
 * @apiParam (Body) {String} password User password.
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {String} Status Message
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *  message: 'Your account created successfully.',
 *  id: 201
 * }
 *
 * {
 *  message: 'Duplicate',
 *  id: 209
 * }
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 */

public static async update(req: Request, res: Response, next: any) {
  const SUCCESS = 200;
  try {
    await User.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return res.sendStatus(SUCCESS);
  } catch (err) {
    return next(err);
  }
}
}
