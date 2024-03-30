const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id:String,
  name: String,
  email: String,
  address: String,
  password: String,
  phoneNumber: String,
  tauxPho: Number,  
  tauxAmo: Number,  
  tauxNit: Number,  
  
}, { versionKey: false });

module.exports = mongoose.model('client', userSchema);
