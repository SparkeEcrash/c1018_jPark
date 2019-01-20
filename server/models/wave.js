const mongoose = require('mongoose');

const waveSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: 1, 
    maxlength: 100
  }
});

const Wave = mongoose.model('Wave', waveSchema);

module.exports = { Wave }