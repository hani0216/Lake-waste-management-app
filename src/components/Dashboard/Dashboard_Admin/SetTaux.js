import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './SetTaux.css';

function SetTaux() {
  const [formData, setFormData] = useState({
    tauxPhosphate: '',
    tauxAmmonium: '',
    tauxNitrate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/taux', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Seuil enregistré avec succès !');
        // Effacer les données du formulaire après la soumission réussie
        setFormData({
          tauxPhosphate: '',
          tauxAmmonium: '',
          tauxNitrate: ''
        });
      } else {
        console.error('Erreur lors de l\'enregistrement du seuil');
        alert('Erreur lors de l\'enregistrement du seuil');
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du seuil :', error);
      alert('Une erreur est survenue lors de l\'enregistrement du seuil');
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
              name="tauxPhosphate"
              value={formData.tauxPhosphate}
              onChange={handleChange}
              placeholder="Taux de phosphate"
            />
          </div>
          <div className="input-container ic2">
            <input
              id="nit"
              className="input"
              type="text"
              name="tauxNitrate"
              value={formData.tauxNitrate}
              onChange={handleChange}
              placeholder="Taux de nitrate"
            />
          </div>
          <div className="input-container ic2">
            <input
              id="amo"
              className="input"
              type="text"
              name="tauxAmmonium"
              value={formData.tauxAmmonium}
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
