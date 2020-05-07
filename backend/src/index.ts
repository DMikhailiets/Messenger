import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import  { UserController } from './controllers'

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

const app = express();

const User = new UserController();

// app.use(bodyParser.urlencoded({ extended: false })) for multipart-form data
app.use(bodyParser.json())

app.get('/user/:id', User.show)
app.delete('/user/:id', User.delete)
app.post('/user/registration', User.create)




// app.post('/create', function (req: express.Request, res: express.Response) {
  
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});