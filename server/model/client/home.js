const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema
const HomeSchema = new Schema({
  top_nav: {
    type: Array,
    required: true,
  },
  swiper: {
    type: Array,
    required: true,
  }
})

module.exports = User = mongoose.model('users', HomeSchema)