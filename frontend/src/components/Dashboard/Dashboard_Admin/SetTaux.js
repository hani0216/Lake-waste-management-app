import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './SetTaux.css';

function SetTaux() {
  const [formData, setFormData] = useState({
    pho: '',
    amo: '',
    nit: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/taux/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Seuil mis à jour avec succès !');
        // Afficher une alerte de succès
        alert('Seuil mis à jour avec succès !');
        // Effacer les données du formulaire après la soumission réussie
        setFormData({
          pho: '',
          amo: '',
          nit: ''
        });
      } else {
        console.error('Erreur lors de la mise à jour du seuil');
        alert('Erreur lors de la mise à jour du seuil');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du seuil :', error);
      alert('Une erreur est survenue lors de la mise à jour du seuil');
    }
  };

  return (
    <div>
      <SideBar />
      <div className="form1">
        <div className="title">Saisir seuil</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container ic1">
            <input
              id="pho"
              className="input"
              type="text"
              name="pho"
              value={formData.pho}
              onChange={handleChange}
              placeholder="Taux de phosphate"
            />
          </div>
          <div className="input-container ic2">
            <input
              id="nit"
              className="input"
              type="text"
              name="nit"
              value={formData.nit}
              onChange={handleChange}
              placeholder="Taux de nitrate"
            />
          </div>
          <div className="input-container ic2">
            <input
              id="amo"
              className="input"
              type="text"
              name="amo"
              value={formData.amo}
              onChange={handleChange}
              placeholder="Taux d'ammonium"
            />
          </div>
          <button type="submit" className="submit">Valider</button>
        </form>
      </div>
    </div>
  );
}

export default SetTaux;
