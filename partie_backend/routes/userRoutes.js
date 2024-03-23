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

// Route DELETE pour supprimer un utilisateur par son nom
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
    const { name, email, address, password, phoneNumber, tauxPho, tauxNit, tauxAmo } = req.body;
    
    const newUser = new UserModel({
      name,
      email,
      address,
      password,
      phoneNumber,
      tauxPho,
      tauxNit,
      tauxAmo
    });

    const savedUser = await newUser.save();
    
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

// Route GET pour récupérer un utilisateur par son nom
router.get('/:userName', async (req, res) => {
  try {
    const user = await UserModel.findOne({ name: req.params.userName });
    if (!user) {
      return res.status(404).json({ message: "L'utilisateur n'a pas été trouvé" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Erreur lors de la recherche de l\'utilisateur :', err);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
});

module.exports = router;
