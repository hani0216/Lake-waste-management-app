const express = require('express');
const TauxModel = require('../models/Taux'); // Assurez-vous que le chemin vers le modèle est correct

const router = express.Router();

// Route GET pour récupérer tous les messages
router.post('/', async (req, res) => {
    try {
      const { pho, nit, amo } = req.body;
      
      // Vérifier s'il existe déjà un seuil
      const existingTaux = await TauxModel.findOne();
      
      if (existingTaux) {
        // Mettre à jour le seuil existant avec les nouvelles valeurs
        existingTaux.pho = pho;
        existingTaux.nit = nit;
        existingTaux.amo = amo;
        
        // Enregistrer les modifications
        const updatedTaux = await existingTaux.save();
        
        res.status(200).json(updatedTaux);
      } else {
        // Créer un nouveau seuil avec les valeurs fournies
        const newTaux = new TauxModel({
          pho,
          nit,
          amo
        });
        
        // Enregistrer le nouveau seuil
        const savedTaux = await newTaux.save();
        
        res.status(201).json(savedTaux);
      }
    } catch (err) {
      console.error('Erreur lors de l\'ajout ou de la mise à jour du seuil :', err);
      res.status(500).json({ error: 'Erreur lors de l\'ajout ou de la mise à jour du seuil' });
    }
  });


module.exports = router;
