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
// userRoutes.js

router.delete('/:userName', async (req, res) => {
  try {
    const deletedUser = await UserModel.findOneAndDelete({ name: req.params.userName });
    if (!deletedUser) {
      return res.status(404).json({ message: "L'utilisateur n'a pas été trouvé" });
    }
    res.status(200).json({ message: "L'utilisateur a été supprimé avec succès" });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    res.status(500).json({ message: "Une erreur est survenue lors de la suppression de l'utilisateur" });
  }
});

// Route POST pour ajouter un nouvel utilisateur
router.post('/', async (req, res) => {
  try {
    // Récupérer tous les utilisateurs triés par _id croissant
    const users = await UserModel.find({}).sort({ _id: 1 });

    // Trouver le premier _id vide et l'utiliser pour le nouvel utilisateur
    let newId = 1;
    for (const user of users) {
      if (user._id !== newId) break; // Sortir de la boucle si l'identifiant actuel n'est pas égal à newId
      newId++;
    }

    // Création d'une nouvelle instance du modèle User avec les données du client
    const { name, email, address, password, phoneNumber, tauxPhosphate, tauxNitrate, tauxAmmonium } = req.body;
    const newUser = new UserModel({
      _id: newId, // Utiliser le premier _id vide
      name,
      email,
      address,
      password,
      phoneNumber,
      taux: {
        pho: tauxPhosphate,
        nit: tauxNitrate,
        amo: tauxAmmonium
      }
    });

    // Enregistrement du nouvel utilisateur dans la base de données
    const savedUser = await newUser.save();
    
    // Envoi de la réponse avec les détails de l'utilisateur ajouté
    res.status(201).json(savedUser);
  } catch (err) {
    console.error('Erreur lors de l\'ajout d\'un utilisateur :', err);
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
