const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  genre: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  cast: [
    {
      type: String,
      required: true,
    },
  ],
  rating: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
