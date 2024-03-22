const express = require('express');
const MessageModel = require('../models/Message'); // Assurez-vous que le chemin vers le modèle est correct

const router = express.Router();

// Route GET pour récupérer tous les messages
router.get('/', async (req, res) => {
  try {
    const messages = await MessageModel.find({});
    res.json(messages);
  } catch (err) {
    console.error('Erreur lors de la recherche des messages :', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

// Route POST pour ajouter un nouveau message
router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber, subject, messageContent } = req.body;
    const newMessage = new MessageModel({
      name,
      email,
      phoneNumber,
      subject,
      messageContent
    });
    const savedMessage = await newMessage.save();
    
    // Envoi de la réponse avec les détails du message ajouté
    res.status(201).json(savedMessage);

  } catch (err) {
    console.error('Erreur lors de l\'ajout d\'un message :', err);
    res.status(500).json({ error: 'Erreur lors de l\'ajout d\'un message' });
  }
});

// Route PUT pour mettre à jour un message comme vu
router.put('/:id', async (req, res) => {
    try {
      const messageId = req.params.id;
      const { isSeen } = req.body;
  
      const updatedMessage = await MessageModel.findByIdAndUpdate(messageId, { isSeen }, { new: true });
  
      if (!updatedMessage) {
        return res.status(404).json({ error: "Message non trouvé" });
      }
  
      res.json(updatedMessage);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du message :', error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour du message' });
    }
  });

module.exports = router;
