const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { versionKey: false });

const Anpe = mongoose.model('anpe', userSchema);

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/db_clients', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à la base de données réussie');

    // Vérifier si la collection existe déjà
    mongoose.connection.db.listCollections({ name: 'anpes' })
      .next((err, collinfo) => {
        if (collinfo) {
          console.log('La collection "anpes" existe déjà');
        } else {
          // Si la collection n'existe pas, créer un nouvel administrateur pour la créer
          Anpe.create({ email: 'admin@example.com', password: 'password' }, (err, anpe) => {
            if (err) {
              console.error('Erreur lors de la création de l\'anpe:', err);
            } else {
              console.log('La collection "anpes" a été créée avec succès');
            }
          });
        }
      });
  })
  .catch(err => {
    console.error('Erreur lors de la connexion à la base de données:', err);
  });

module.exports = Anpe;
