require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const fetch = require('node-fetch');
const http = require('axios')

const app = express();
const port = 3000;
// const users = require('./users.json')

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.USERS)
.then(() => console.log("Connected"))
.catch(() => console.log("Error"));

// mongoose.connection.db.dropDatabase();

app.get("/", (req, res) => {
   const response = http.get('https://jsonplaceholder.typicode.com/users');
    res.send(response.data)

    

    const userSchema = new mongoose.Schema({
        id: Number,
        name: String,
        username: String,
        email: String,
        address: {street: String, suite: String, city: String, zipcode: String, geo: {
          lat: String, lng: String  
        }},
        phone: String,
        website: String,
        company: {
            name: String,
            catchPhrase: String,
            bs: String
        } 
    })
    const User = mongoose.model('User', userSchema)

    User.find({},(err, user)=>{
      if(err){
          console.log("Not Worked");
          console.log(err);
      }else{
          console.log("All users in DB are");
          console.log(user);
      }
  })
    }
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
