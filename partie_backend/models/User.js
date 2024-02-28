const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  address: String,
  phoneNumber: String
}, { versionKey: false });

module.exports = mongoose.model('client', userSchema);
