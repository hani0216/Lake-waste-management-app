const express = require('express');
const AnpeModel = require('../models/ANPE');
const router = express.Router();

// Route pour récupérer tous les enregistrements Anpe
router.get('/anpes', async (req, res) => {
  try {
    const anpes = await AnpeModel.find({});
    res.json(anpes);
  } catch (err) {
    console.error('Erreur lors de la recherche des Anpes:', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des Anpes' });
  }
});

// Route pour créer un nouvel enregistrement Anpe
router.post('/anpes', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherche de l'Anpe dans la base de données
    const anpe = await AnpeModel.findOne({ email: email });

    if (anpe) {
      res.json("exist");
    } else {
      res.json("notexist");
    }

  } catch (e) {
    console.error(e);
    res.json("notexist error");
  }
});

module.exports = router;
