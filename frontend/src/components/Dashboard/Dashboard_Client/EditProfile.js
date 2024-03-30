import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import SideBarCl from './SideBarCl';
import './EditProfile.css'

function EditProfile() {
  const { email } = useParams(); // Récupérer l'email depuis les paramètres d'URL
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/users/email/${email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données du client');
        }
        return response.json();
      })
      .then(data => {
        setFormData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données du client : ', error);
        setLoading(false);
      });
  }, [email]);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    fetch(`http://localhost:3000/edit-profile/${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour des données du client');
      }
      return response.json();
    })
    .then(data => {
      console.log('Données mises à jour avec succès : ', data);
      setLoading(false);
      // Vous pouvez rediriger l'utilisateur vers une autre page après la modification réussie
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour des données du client : ', error);
      setLoading(false);
    });
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SideBarCl />
      <h2> {email}</h2>



      
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
        <label>Mot de passe:</label>
        <input type="password" name="password" value={formData.password || ''} onChange={handleChange} />
        <label>Adresse:</label>
        <input type="text" name="address" value={formData.address || ''} onChange={handleChange} />
        <label>Numéro de téléphone:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default EditProfile;
