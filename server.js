const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const students = require('./routes/api/students');

const app = express();

app.use(bodyParser.json());

const url = 'mongodb://localhost:27017/students';

mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('Mongodb Connected....'))
  .catch(err => console.log(err));


app.use('/api/students', students);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started At Port: ${PORT}`));