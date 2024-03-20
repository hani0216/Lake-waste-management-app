const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  email: String,
  address: String,
  password: String,
  phoneNumber: String,
  taux: {
    pho: Number,
    nit: Number,
    amo: Number
  }
}, { versionKey: false });

module.exports = mongoose.model('client', userSchema);
