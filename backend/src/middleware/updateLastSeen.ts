import { UserModel } from '../models'
import express from 'express'

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: "5eb595efb6e9e00dd214a69a" },
    {
      fullname: "qwe",
      last_seen: new Date()
    },
    { new: true },
    () => {}
  );
  next();
};