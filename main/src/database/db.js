require('dotenv').config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)

const wordStore = new mongoose.Schema({
  word: String
})
const Words = mongoose.model('Words', wordStore)

const resultStore = new mongoose.Schema({
  attempted_word: String,
  correct: Boolean,
  audio: String,
  definition: String,
  example: String,
  partOfSpeech: String
})
const Results = mongoose.model('Results', resultStore)

// drop database
// db.dropDatabase()

// drop collection
// db.collection.drop()

// find all function
// find()

// save function
// save()

// edit values function
// replaceOne()

// delete value function
// deleteOne()

// grab three random words
// db.words.aggregate([{$sample: {size: 3}}]);

module.exports = { Words, Results };
