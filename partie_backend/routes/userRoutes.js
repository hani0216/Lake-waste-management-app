const express = require('express');
const UserModel = require('../models/User');

const router = express.Router();

// Route GET pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.error('Erreur lors de la recherche des utilisateurs:', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});
// Route POST pour ajouter un client
router.post('/ajouterClient', async (req, res) => {
  try {
    // Récupération des données du client depuis le corps de la requête
    const { id, name, email, address, password, phoneNumber } = req.body;

    // Création d'une nouvelle instance du modèle User avec les données du client
    const newClient = new UserModel({
      id,
      name,
      email,
      address,
      password,
      phoneNumber
    });

    // Enregistrement du client dans la base de données
    const savedClient = await newClient.save();

    // Envoi de la réponse avec les détails du client ajouté
    res.status(201).json(savedClient);
  } catch (err) {
    console.error('Erreur lors de l\'ajout du client :', err);
    res.status(500).json({ error: 'Erreur lors de l\'ajout du client' });
  }
});


// Route POST pour ajouter un nouvel utilisateur
router.post('/', async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const savedUser = await newUser.save();
    
    // Envoi de la réponse avec les détails de l'utilisateur ajouté
    res.status(201).json(savedUser);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de l\'ajout d\'un utilisateur' });
  }
});

// Route POST pour l'authentification d'un utilisateur
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email, password });
    if (user) {
      // Vérification du mot de passe
      if (user.password === password) {
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
