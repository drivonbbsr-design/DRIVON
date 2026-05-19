const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rentPerHour: Number,
  image: String
});

module.exports = mongoose.model('Car', CarSchema);