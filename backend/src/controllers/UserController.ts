import express from "express"
import bcrypt from "bcrypt"
import socket from "socket.io"
import { validationResult } from "express-validator"
import { UserModel } from "../models"
import { createJWTToken } from "../utils"



const success = '<div style="min-height: 90vh;display: flex;justify-content: center;align-items: center;"><img style="width: 20px;"src="https://vectorified.com/images/green-check-icon-2.png" alt="success"><h3 style="color: gray;font-weight: 300;font-family: Arial, Helvetica, sans-serif;margin-left: 5px;">Account confirmed!</h3>  </div>'
const error = '<div style="min-height: 90vh;display: flex;justify-content: center;align-items: center;"><img style="width: 20px;"src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png" alt="success"><h3 style="color: gray;font-weight: 300;font-family: Arial, Helvetica, sans-serif;margin-left: 5px;">Error!</h3>  </div>'
class UserController {
  io: socket.Server

  constructor(io: socket.Server) {
    this.io = io
  }
  // TODO: В конструкторе следить за методоами сокета относящихся к юзеру и вызывать соотв. методы
  // constructor() {
  //   io.on("connection", function(socket: any) {
  //     socket.on('', function(obj: any) {
  //       // Вызывать метод для создания сущности
  //     })
  //   });
  // }

  show = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found"
        });
      }
      res.json(user);
    });
  };

  getMe = (req: any, res: express.Response) => {
    const id: string = req.user._id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found"
        });
      }
      res.json(user);
    });
  };
  verify = (req: express.Request, res: express.Response) => {
    let  hash: any = ''
    if(req.query.hash){
      hash = req.query.hash;
      UserModel.findOne({ confirm_hash: hash }, (err, user) => {
        if (err || !user) {
          return res.status(404).send(error)
        }
        user.confirmed = true;
        user.save(err => {
          if (err) {
            return res.status(404).send(error)
          }
          res.send(success);
        });
      })

    }
    console.log(hash)

    if (hash = '') {
      return res.status(422).send(error)
    }
   
  }
  create = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    }
    const user = new UserModel(postData)
    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch(reason => {
        res.status(422).json(reason);
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then(user => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`
          });
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`
        });
      });
  };

  login = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password
    }
    console.log(postData.password)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: postData.email }, (err, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      if (bcrypt.compareSync(postData.password, user.password)) {
        const token = createJWTToken(user);
        res.json({
          status: "success",
          token
        });
      } else {
        res.status(403).json({
          message: "Incorrect password or email"
        });
      }
    });
  };
}

export default UserController;