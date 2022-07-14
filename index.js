const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.quhih.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('db connection successfull'))
  .catch((err) => console.log(console.log(err)));

app.listen(5000, () => {
  console.log('Backend server is running');
});
