require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('axios');

const User = require('./model/user')
const userRoutes = require('./route/user');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose
  .connect(process.env.USERS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then (() =>
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    }))
  .then (() => mongoose.connection.db.dropDatabase())
  .then(() => console.log("Connected"))
  .catch(() => console.log("Error"));


const loadFunction = async () => {

  const response = await http.get('https://jsonplaceholder.typicode.com/users');
  const userData = response.data

  userData.map((person) => {

    const newUser = new User ({
      id: person.id,
        name: person.name,
        username: person.username,
        email: person.email,
        address: {street: person.address.street, suite: person.address.suite, city: person.address.city, zipcode: person.address.zipcode, geo: {
          lat: person.address.geo.lat, lng: person.address.geo.lng  
        }},
        phone: person.phone,
        website: person.website,
        company: {
            name: person.company.name,
            catchPhrase: person.company.catchPhrase,
            bs: person.company.bs
        } 
    })
    newUser.save((err) => {
      if (err) console.log(err)
    } 
     )
  }
  )
 
}


app.get('/', async (req, res) => {
  const finding = await User.find();
  res.json(finding)
})



loadFunction()