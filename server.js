const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const database = async () => {
    await mongoose.connect('mongodb://localhost:27017/test');
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })