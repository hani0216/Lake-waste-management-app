const express = require('express');
const TauxModel = require('../models/Taux');

const router = express.Router();

// Route POST pour créer un nouveau taux
router.post('/', async (req, res) => {
    try {
        const { pho, nit, amo } = req.body;
        
        // Créer une nouvelle instance de Taux avec les données reçues
        const newTaux = new TauxModel({ pho, nit, amo });

        // Enregistrer le nouveau taux dans la base de données
        const savedTaux = await newTaux.save();
        
        res.status(201).json(savedTaux);
    } catch (err) {
        console.error('Erreur lors de l\'ajout du taux :', err);
        res.status(500).json({ error: 'Erreur lors de l\'ajout du taux' });
    }
});
router.get('/', async (req, res) => {
    try {
        // Récupérer tous les seuils depuis la base de données
        const tauxs = await TauxModel.find({});
        res.json(tauxs);
    } catch (err) {
        console.error('Erreur lors de la récupération des taux :', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des taux' });
    }
});
// Route PUT pour mettre à jour tous les taux existants avec de nouvelles valeurs
router.put('/update', async (req, res) => {
    try {
        const { pho, nit, amo } = req.body;
        
        // Mettre à jour tous les enregistrements existants avec les nouvelles valeurs
        await TauxModel.updateMany({}, { pho, nit, amo });

        res.status(200).json({ message: 'Tous les taux ont été mis à jour avec succès' });
    } catch (err) {
        console.error('Erreur lors de la mise à jour des taux :', err);
        res.status(500).json({ error: 'Erreur lors de la mise à jour des taux' });
    }
});

module.exports = router;
