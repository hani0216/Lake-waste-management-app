const express = require('express');
const AdminModel = require('../models/Admin');

const router = express.Router();

router.get('/' ,async (req,res)=>{
    try {
        const admins = await AdminModel.find({});
        res.json(admins);
      } catch (err) {
        console.error('Erreur lors de la recherche des administrateurs:', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des administrateurs' });
      }
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherche de l'administrateur dans la base de données
    const admin = await AdminModel.findOne({ email: email });

    if (admin) {
        res.json("exist");
    } else {
        res.json("admin notexist");
    }

  } catch (e) {
    console.error(e);
    res.json("notexist");
  }
});

module.exports = router;
