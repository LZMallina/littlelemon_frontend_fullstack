//setup the skeleton of express server

require('dotenv').config() //load the environment variable of the server

const express = require('express')
const app = express();

app.use(express.json())//read all the json data that we send up to server

//setup skeleton of stripe

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([//contains the id for the storeIitems database, price and name
  [1, { priceInCents: 10000, name: "Learn React" }],
  [2, { priceInCents: 20000, name: "Learn CSS" }],
]);
app.listen(3001)//app to listen on localhost port 3000

