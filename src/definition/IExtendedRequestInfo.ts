import { Request } from "express"
export interface IExtendedRequestInfo extends Request {
  id: string,
  originalUrl: string
}
