import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import { updateLastSeen, checkAuth } from './middleware'
import  { UserController, DialogController, MessageController } from './controllers'
import dotenv from 'dotenv'
import { loginValidation } from './utils/validations';

const app = express();
dotenv.config()

// app.use(bodyParser.urlencoded({ extended: false })) for multipart-form data
app.use(bodyParser.json())
app.use(updateLastSeen)
app.use(checkAuth)

const User = new UserController()
const Dialog = new DialogController()
const Messages = new MessageController()

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.get('/user/:id', User.show)
app.delete('/user/:id', User.delete)
app.post('/user/registration', User.create)
app.post('/user/login', loginValidation, User.login)

app.get('/dialogs', Dialog.index)
app.post('/dialogs', Dialog.create)
app.delete('/dialogs/:id', Dialog.delete)

app.get('/messages', Messages.index)
app.post('/messages', Messages.create)
app.delete('/messages/:id', Messages.delete)

// app.post('/create', function (req: express.Request, res: express.Response) {
  
// });

app.listen(process.env.PORT, function () {
  console.log(`Server listening on ${process.env.PORT} port!`)
});