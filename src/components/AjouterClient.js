import React, { useState } from 'react';
import './LogIn/loginClient.css';
import SideBar from './Dashboard/SideBar/SideBar';
import '../AjouterClient.css'

function AjouterClient() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    address: '',
    phoneNumber: '',
    tauxPhosphate: '',
    tauxNitrate: '',
    tauxAmmonium: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.alert('Client ajouté avec succès !');
        // Rediriger vers la page DashboardAdmin après l'ajout réussi
        window.location.href = '/DashboardAdmin';
      } else {
        alert('Erreur lors de l\'ajout du client.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du client :', error);
      alert('Une erreur est survenue lors de l\'ajout du client.');
    }
  };

  return (
    <div>
      <SideBar />
      <div className="container">
        <div className="heading">Ajouter client</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className='bloc1' >
            <div className='bloc11'>
            <input required className="input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" />
            <input required className="input" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Adresse" />
            </div>
            <div>
            <input required className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
            <input required className="input" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Numero de téléphone" />

            </div>
          </div>
          <input required className="input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe" />
          <div className="saisir-taux">
            <div className="title"></div>
            <input required className="input" type="number" name="tauxPhosphate" value={formData.tauxPhosphate} onChange={handleChange} placeholder="Taux de phosphate" />
            <input required className="input" type="number" name="tauxNitrate" value={formData.tauxNitrate} onChange={handleChange} placeholder="Taux de nitrate" />
            <input required className="input" type="number" name="tauxAmmonium" value={formData.tauxAmmonium} onChange={handleChange} placeholder="Taux d'ammonium" />
          </div>
          <button type="submit" className="login-button">Valider</button>
        </form>
      </div>
    </div>
  );
}

export default AjouterClient;
