const express = require('express');
const AnpeModel = require('../models/ANPE'); // Assurez-vous que le chemin vers le modèle est correct

const router = express.Router();

// Route GET pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const anpes = await AnpeModel.find({});
    res.json(anpes);
  } catch (err) {
    console.error('Erreur lors de la recherche des utilisateurs:', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

// Route POST pour ajouter un nouvel utilisateur
router.post('/', async (req, res) => {
  try {
    const { nom, adresse, numTel, email, password } = req.body;
    const newAnpe = new AnpeModel({
      nom,
      adresse,
      numTel,
      email,
      password
    });
    const savedAnpe = await newAnpe.save();
    
    // Envoi de la réponse avec les détails de l'utilisateur ajouté
    res.status(201).json(savedAnpe);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de l\'ajout d\'un utilisateur' });
  }
});

// Route POST pour l'authentification d'un utilisateur
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
  const anpe = await AnpeModel.findOne({ email: email });
  if (admin) {
    // Vérification du mot de passe
    if (admin.password === password) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } else {
    res.json("notexist");
  }
} catch (e) {
  console.error(e);
  res.json("notexist error");
}
});

module.exports = router;
