const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/userRoutes');

const app = express();

// Utilisation de body-parser pour parser les requêtes JSON
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/db_clients', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Utilisation du routeur pour gérer les requêtes liées aux utilisateurs
app.use('/users', usersRouter);

// Démarrage du serveur sur le port 3005
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
