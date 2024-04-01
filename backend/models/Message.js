const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  subject: { type: String, required: true },
  messageContent: { type: String, required: true },
  isSeen: {
    type: Boolean,
    default: false
  }
});

// Connexion à la base de données
mongoose.connect('mongodb://mongo:27017/db_clients', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à la base de données réussie');
  })
  .catch(err => {
    console.error('Erreur lors de la connexion à la base de données:', err);
  });

const Message = mongoose.model('Message', messageSchema);



module.exports = Message;
