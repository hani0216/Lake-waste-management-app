import React, { useEffect, useState } from 'react';
import './DashTable.css';

function DashTable() {
  const [donnees, setDonnees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setDonnees(data))
      .catch(error => console.error('Erreur lors de la récupération des données : ', error));
  }, []); // Le deuxième argument de useEffect est un tableau vide, ce qui signifie que l'eff fois après le premier rendu.

  return (
    <div className='aalt'>
      <div class="client-container">
    <input type="text" class="search-input " placeholder="Rechercher un client"></input>
    <button class="primary-button alt">Ajouter un client</button>
</div>

    <div >
      <table className="rwd-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Mail</th>
            <th>Adresse</th>
            <th>Numero de téléphone</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((element, index) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td><button className='primary-button'>{element.name}</button></td>
              <td>{element.email}</td>
              <td>{element.address}</td>
              <td>{element.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default DashTable;
