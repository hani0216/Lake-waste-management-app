// user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   nom: String,
   email: String,
   num_tel: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
