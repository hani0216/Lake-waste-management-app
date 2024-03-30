import React, { useState, useEffect } from 'react';
import './Messages.css';
import { Link } from 'react-router-dom';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:3000/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error('Erreur lors de la récupération des messages :', response.status);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des messages :', error);
    }
  };

  const markMessageAsSeen = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/messages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isSeen: true })
      });
      if (response.ok) {
        setMessages(messages.map(message => message._id === id ? { ...message, isSeen: true } : message));
      } else {
        console.error('Erreur lors de la mise à jour du message :', response.status);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du message :', error);
    }
  };

  const handleSubjectClick = (id) => {
    const selected = messages.find(message => message._id === id);
    setSelectedMessage(selected);
    markMessageAsSeen(id);
  };

  const handleBackToList = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      {selectedMessage ? (
        <div>
          <div className={`message ${selectedMessage.isSeen ? 'seen' : ''}`}>
            <h3>{selectedMessage.subject}</h3>
            <p><strong>Nom:</strong> {selectedMessage.name}</p>
            <p><strong>Email:</strong> {selectedMessage.email}</p>
            <p><strong>Téléphone:</strong> {selectedMessage.phoneNumber}</p>
            <p><strong>Message:</strong> {selectedMessage.messageContent}</p>
          </div>
          <button onClick={handleBackToList}>Retour à la liste</button>
        </div>
      ) : (
        <div className="messages-list">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isSeen ? 'seen' : ''}`} onClick={() => handleSubjectClick(message._id)}>
              <h3>{message.subject}</h3>
              <p><strong>Nom:</strong> {message.name}</p>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Téléphone:</strong> {message.phoneNumber}</p>
              <p><strong>Message:</strong> {message.messageContent}</p>
            </div>
          ))}
        </div>
      )}
      <Link to="/DashboardAdmin" className="primary-button">Retour au tableau de bord</Link>
    </div>
  );
}

export default Messages;
