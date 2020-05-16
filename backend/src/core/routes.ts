import bodyParser from "body-parser"
import express from "express"
import socket from "socket.io"
import { updateLastSeen, checkAuth } from "../middleware"
import { loginValidation, registerValidation } from "../utils/validations"
import cors from 'cors'
import { UserCtrl, DialogCtrl, MessageCtrl } from "../controllers"

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtrl(io)
  const DialogController = new DialogCtrl(io)
  const MessagesController = new MessageCtrl(io)

  app.use(cors())
  app.use(bodyParser.json())
  app.use(updateLastSeen)
  app.use(checkAuth)
  
  // app.use(bodyParser.urlencoded({ extended: false })) for multipart-form data
  
  app.get('/user/:id', cors(corsOptions), UserController.show)
  app.get('/users/me', cors(corsOptions), UserController.getMe)
  app.delete('/user/:id', cors(corsOptions), UserController.delete)
  app.post('/user/registration', cors(corsOptions), registerValidation, UserController.create)
  app.post('/user/login', cors(corsOptions), loginValidation, UserController.login)

app.get('/dialogs', cors(corsOptions), DialogController.index)
app.post('/dialogs', cors(corsOptions), DialogController.create)
app.delete('/dialogs/:id', cors(corsOptions), DialogController.delete)

app.get('/messages', cors(corsOptions), MessagesController.index)
app.post('/messages', cors(corsOptions), MessagesController.create)
app.delete('/messages/:id', cors(corsOptions), MessagesController.delete)

}

export default createRoutes