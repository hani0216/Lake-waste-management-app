import React from 'react';

function SupprimerClient({ id, onDelete }) {
  const handleDelete = () => {
    // Envoyer une requête de suppression au backend pour supprimer le client avec l'ID spécifié
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Si la suppression réussit, appeler la fonction de mise à jour des données parent pour recharger la liste des clients
          onDelete();
        } else {
          throw new Error('Erreur lors de la suppression du client.');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du client :', error);
        alert('Une erreur est survenue lors de la suppression du client.');
      });
  };

  return (
    <button onClick={handleDelete}>Supprimer</button>
  );
}

export default SupprimerClient;
