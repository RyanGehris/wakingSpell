import dotenv from 'dotenv';
dotenv.config()
console.log(process.env.DB_NAME);
import mongoose from "mongoose";
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)

const wordStore = new mongoose.Schema({
  word: {
    type: String,
    unique: true,
    required: true
  }
})
const Words = mongoose.model('Words', wordStore)

const resultStore = new mongoose.Schema({
  attempted_word: {
    type: String,
    unique: true,
    required: true
  },
  correct: Boolean,
  phonetics: [{}],
  meanings: [{}],
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

export default { Words, Results };
