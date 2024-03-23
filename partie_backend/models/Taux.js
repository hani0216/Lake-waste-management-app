const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
    pho: Number,
    nit: Number,
    amo: Number
  
}, { versionKey: false });

module.exports = mongoose.model('taux', userSchema);
