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
    <div>
      <div className="wrapper">
        <div className="title">
          <h1>CONTACTEZ-NOUS</h1>
        </div>
        <div className="contact-form" >
          <form className="input-fields" onSubmit={handleSubmit}>
            <div><input type="text" className="input" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" />
            <input type="email" className="input" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse Email" />
            <input type="tel" className="input" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Téléphone" />
            <input type="text" className="input" name="subject" value={formData.subject} onChange={handleChange} placeholder="Sujet" /></div>
            <div className="msg">
              <textarea className="input" name="messageContent" value={formData.messageContent} onChange={handleChange} placeholder="Message"></textarea>
              <button type="submit" className="btn">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
