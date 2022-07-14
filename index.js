const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.quhih.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('db connection successfull'))
  .catch((err) => console.log(console.log(err)));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(5000, () => {
  console.log('Backend server is running');
});
