const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { versionKey: false });

const Admin = mongoose.model('admin', userSchema);

mongoose.connect('mongodb://localhost:27017/db_clients', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à la base de données réussie');
    
    // Vérifier si la collection existe déjà
    mongoose.connection.db.listCollections({ name: 'admins' })
      .next((err, collinfo) => {
        if (collinfo) {
          console.log('La collection "admins" existe déjà');
        } else {
          // Si la collection n'existe pas, créer un nouvel administrateur pour la créer
          Admin.create({ email: 'admin@example.com', password: 'password' }, (err, admin) => {
            if (err) {
              console.error('Erreur lors de la création de l\'administrateur:', err);
            } else {
              console.log('La collection "admins" a été créée avec succès');
            }
          });
        }
      });
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Erreur lors de la connexion à la base de données:', err);
  });
module.exports = Admin;
