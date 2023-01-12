const express = require('express');
const axios = require('axios');
const db = require('../database/db.js');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const app = express()
const port = process.env.SERVERPORT || 5207

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect to ai
const configuration = new Configuration({
  organization: process.env.ORG,
  apiKey: process.env.OPEN,
});
const openai = new OpenAIApi(configuration);

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

app.get('/aiImage', async function(req, res) {
  console.log(req.query.entry);
  const response = await openai.createImage({
    prompt: req.query.entry,
    n: 1,
    size: "256x256"
  });
  let image_url = response.data.data[0].url;
  console.log(image_url);
  res.status(200).send(image_url);
})



//displays a message that our server is running and listening on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

