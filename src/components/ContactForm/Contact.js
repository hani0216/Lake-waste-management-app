import React, { useState } from 'react';
import './contact.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    messageContent: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/messages/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.alert('Message envoyé avec succès !');
        // Rediriger vers la page de confirmation après l'envoi réussi
        navigate('/PostContact');
      } else {
        alert('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      alert('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Contactez-nous</h1>
      <form className="form-fieldset" onSubmit={handleSubmit}>
        <input type="text" className="input-field" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" />
        <input type="email" className="input-field" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse Email" />
        <input type="tel" className="input-field" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Téléphone" />
        <input type="text" className="input-field" name="subject" value={formData.subject} onChange={handleChange} placeholder="Sujet" />
        <textarea className="textarea-field" name="messageContent" value={formData.messageContent} onChange={handleChange} placeholder="Message"></textarea>
        <button type="submit" className="btn-submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
