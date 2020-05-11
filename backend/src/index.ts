import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import { updateLastSeen   } from './middleware'
import  { UserController, DialogController, MessageController } from './controllers'
import dotenv from 'dotenv'

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

dotenv.config()

const User = new UserController()
const Dialog = new DialogController()
const Messages = new MessageController()

// app.use(bodyParser.urlencoded({ extended: false })) for multipart-form data
app.use(bodyParser.json())
app.use(updateLastSeen);

app.get('/user/:id', User.show)
app.delete('/user/:id', User.delete)
app.post('/user/registration', User.create)
app.post('/user/login', User.login);

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