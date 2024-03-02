const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/userRoutes');
const AdminRoutes = require('./routes/AdminRoutes');

const app = express();

// Configurer CORS
const corsOptions = {
  origin: 'http://localhost:3001', // Remplacez cela par l'origine de votre application cliente
  methods: ['GET', 'POST'], // Méthodes autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
};

// Utiliser CORS middleware
app.use(cors(corsOptions));

// Utilisation de body-parser pour parser les requêtes JSON
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/db_clients', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Utilisation du routeur pour gérer les requêtes liées aux utilisateurs
app.use('/users', usersRouter);
app.use('/admins', AdminRoutes);

// Ajout d'un middleware pour gérer les en-têtes CORS pour les réponses POST
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  next();
});

// Démarrage du serveur sur le port 3005
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
