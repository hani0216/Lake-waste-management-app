const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  email: String,
  address: String,
  password : String ,
  phoneNumber: String
}, { versionKey: false });

module.exports = mongoose.model('client', userSchema);
