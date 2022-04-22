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


// mongoose.connection.db.dropDatabase();

const loadFunction = async () => {
  mongoose
  .connect(process.env.USERS)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Error"));

  const response = await http.get('https://jsonplaceholder.typicode.com/users');
  const userData = response.data

  userData.map((person) => {
    
    const newUser = new User ({
      id: person.id,
        name: person.name,
        username: person.username,
        email: person.email,
        address: {street: person.street, suite: person.suite, city: person.city, zipcode: person.zipcode, geo: {
          lat: person.lat, lng: person.lng  
        }},
        phone: person.phone,
        website: person.website,
        company: {
            name: person.name,
            catchPhrase: person.catchPhrase,
            bs: person.bs
        } 
    })
    newUser.save((err) => {
      if (err) console.log(err)
    } 
     )
  }
  )

}




app.get("/", (req, res) => {
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
