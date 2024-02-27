const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phoneNumber: String
});

module.exports = mongoose.model('client', userSchema);
