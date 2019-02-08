const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const amiiboSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
    maxlength: 100
  },
  description: {
    requried: true,
    type: String,
    maxlength: 100000
  },
  price: {
    required: true,
    type: Number,
    maxlength: 255
  },
  series: {
    type: Schema.Types.ObjectId,
    ref: 'Series',
    required: true
  },
  shipping: {
    required: true,
    type: Boolean
  },
  available: {
    required: true,
    type: Boolean
  },
  wave: {
    type: Schema.Types.ObjectId,
    ref: 'Wave',
    required: true
  },
  sold: {
    type: Number,
    maxlength: 100,
    default: 0
  },
  publish: {
    required: true,
    type: Boolean
  },
  images: {
    type: Array,
    default: []
  }
}, {timestamps: true});

const Amiibo = mongoose.model('Amiibo', amiiboSchema);

module.exports = {Amiibo}