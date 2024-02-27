const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/userRoutes');

const app = express();

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/db_clients', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Utilisation du routeur pour gérer les requêtes liées aux utilisateurs
app.use('/users', usersRouter);

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
