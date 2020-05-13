import bodyParser from "body-parser"
import express from "express"
import socket from "socket.io"
import { updateLastSeen, checkAuth } from "../middleware"
import { loginValidation } from "../utils/validations"

import { UserCtrl, DialogCtrl, MessageCtrl } from "../controllers"

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtrl(io)
  const DialogController = new DialogCtrl(io)
  const MessagesController = new MessageCtrl(io)

app.use(bodyParser.json())
app.use(updateLastSeen)
app.use(checkAuth)
// app.use(bodyParser.urlencoded({ extended: false })) for multipart-form data

app.get('/user/:id', UserController.show)
app.get('/users/me', UserController.getMe)
app.delete('/user/:id', UserController.delete)
app.post('/user/registration', UserController.create)
app.post('/user/login', loginValidation, UserController.login)

app.get('/dialogs', DialogController.index)
app.post('/dialogs', DialogController.create)
app.delete('/dialogs/:id', DialogController.delete)

app.get('/messages', MessagesController.index)
app.post('/messages', MessagesController.create)
app.delete('/messages/:id', MessagesController.delete)

}

export default createRoutes