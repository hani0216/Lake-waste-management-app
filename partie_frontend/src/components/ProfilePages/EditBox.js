import React, { useState } from 'react';
import './Profile'
import './Profile.css'
function EditProfile({ profileData }) {
  const initialFormData = profileData || { name: '', password: '', email: '', address: '', phoneNumber: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour sauvegarder les données modifiées
    // par exemple, en envoyant une requête au serveur
    console.log("Données modifiées :", formData);
    setIsEditing(false);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input required className="input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" disabled={!isEditing} />
        <span className="edit-icon" onClick={handleEditClick}><i className="fas fa-pencil-alt"></i></span>
        <input required className="input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe" disabled={!isEditing} />
        <span className="edit-icon" onClick={handleEditClick}><i className="fas fa-pencil-alt"></i></span>
        <input required className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" disabled={!isEditing} />
        <span className="edit-icon" onClick={handleEditClick}><i className="fas fa-pencil-alt"></i></span>
        <input required className="input" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Adresse" disabled={!isEditing} />
        <span className="edit-icon" onClick={handleEditClick}><i className="fas fa-pencil-alt"></i></span>
        <input required className="input" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Numéro de téléphone" disabled={!isEditing} />
        <span className="edit-icon" onClick={handleEditClick}><i className="fas fa-pencil-alt"></i></span>

        {isEditing ? (
          <button type="submit" className="login-button">Sauvegarder</button>
        ) : null}
      </form>
    </div>
  );
}

export default EditProfile;
