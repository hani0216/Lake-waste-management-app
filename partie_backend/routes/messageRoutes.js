const express = require('express');
const MessageModel = require('../models/Message'); // Assurez-vous d'importer votre modèle Message

const router = express.Router();

router.get('/messages', async (req, res) => {
  try {
    const messages = await MessageModel.find({});
    res.json(messages);
  } catch (error) {
    console.error('Erreur lors de la récupération des messages :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

module.exports = router;
