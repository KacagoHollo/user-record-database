# User Records

## Story

The Nigerian Prince wants to give away a bunch of money to some lucky individuals. For this, he needs to be able to
store and look up data about people. He is searching for a developer who can make a quick prototype for the backend
part of this project.
This is your opportunity to show your skills!

## What are you going to learn?

- fetch data with Express.js
- store data in MongoDB
- fetch data from MongoDB
- create endpoints in ExpressJS
- query data from MongoDB

## Tasks

1. Fetch users data from this api `https://jsonplaceholder.typicode.com/users`, and store it in your MongoDB database
    - After starting the server, sending a `GET` request to the endpoint `/` returns a JSON containing all of the users

2. After starting the server, making a `GET` request to the endpoint `/api/users` returns the placeholder data
    - When the user sends a `GET` request to the endpoint `/api/users`, the server returns a json containing a list of user objects with only the users names
    - When the user adds the `all=true` parameter to the URL, the server returns a json containing list of user objects containing all their data
    - When the user adds the `limit=5` parameter to the URL, the server only returns a json containing 5 user objects
    - When the user adds the `order_by=name` parameter to the URL, the server returns a json containing a list of user objects,  ordered by their `name` field
    - When the user adds the `name=Ervin` parameter to the URL, the server returns a json containing  a list of user objects with the queried string in their names

3. When the user sends a `GET` request to the endpoint `/api/users/id/:id` and `/api/users/username/:username`, the server returns the correct query from the database
    - When the user sends a `GET` request to the endpoint `/api/users/id/:id`, the server returns a single json object with the given id
    - When the user sends a `GET` request to the endpoint `/api/users/username/:username`, the server returns  a json containing a list of user objects where the username starts with the given username string

## General requirements

- All the user records are stored in a database

## Hints

- once you start the project you first need to setup your database and connect it to your NodeJS server
- you can start your Node.js server with `node server.js`
- once the server is running and the database is connected, you can start with creating a model, controller, and routes for the users
- you can base your model on the user json object
- you can avoid getting duplicates by dropping the database collection before it would fetch the placeholder data again

## Background materials

- <i class="far fa-exclamation"></i> [HTTP Requests in Node.js with node-fetch](https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/)
- <i class="far fa-exclamation"></i> [ExpressJS Endpoints](https://expressjs.com/en/guide/routing.html)
- <i class="far fa-exclamation"></i> [MVC RESTApi pattern](https://dev.to/eaetukudo/understanding-mvc-pattern-in-nodejs-2bdn)
- <i class="far fa-book-open"></i> [Setting up MongoDB](https://www.tutorialspoint.com/mongodb/mongodb_environment.htm)
- <i class="far fa-book-open"></i> [MongoDB official site](https://www.mongodb.com/)
- <i class="far fa-book-open"></i> [MongoDB docs](https://docs.mongodb.com/manual/)
- <i class="far fa-book-open"></i> [Express with MongoDB](https://zellwk.com/blog/crud-express-mongodb/)
