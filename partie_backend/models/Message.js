const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  contenu: String,
  lu: Boolean
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
