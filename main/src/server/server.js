import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/word', (req, res) => {
//   axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/brain')
//     .then((result) => {
//       console.log(result.data);
//       res.status(200).send(result.data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).send(err);
//     })
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})