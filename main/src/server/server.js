const express = require('express');
const axios = require('axios');
require('dotenv').config();
const db = require('../database/db.js');
const app = express()
console.log("PORT ", process.env.PORT)
const port = process.env.PORT || 5207

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/word', (req, res) => {
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${req.query.word}`)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    })
})

app.get('/random', (req, res) => {
  db.Words.aggregate([{$sample: {size: 3}}])
    .then((result) => {
      console.log(result)
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    })
})

app.post('/updateResult', (req, res) => {
  db.Results.replaceOne({word: req.body.word}, req.body, {strict: false, upsert: true})
    .then((result) => {
      console.log(result)
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    })
})

// creates a get route that we will fetch from out client-side react app
app.get('/express_backend', (req, res) => {
  res.status(200).send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
});


//displays a message that our server is running and listening on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

