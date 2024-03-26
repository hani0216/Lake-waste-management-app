import React, { useEffect, useState } from 'react';
import './DashTable.css';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

function DashTable() {
  const [donnees, setDonnees] = useState([]);
  const [seuils, setSeuils] = useState({}); // État pour stocker les seuils
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(7); // Nombre de lignes par page

  useEffect(() => {
    // Récupérer les données des clients
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setDonnees(data))
      .catch(error => console.error('Erreur lors de la récupération des données des clients : ', error));

    // Récupérer les seuils
    fetch('http://localhost:3000/taux/')
      .then(response => response.json())
      .then(data => setSeuils(data))
      .catch(error => console.error('Erreur lors de la récupération des seuils : ', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Trier les données en fonction de l'ID
  const sortedData = donnees.sort((a, b) => a._id - b._id);

  // Pagination
  const lastIndex = page * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentData = sortedData.slice(firstIndex, lastIndex);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleDeleteClient = (clientName) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer le client "${clientName}" ?`)) {
      fetch(`http://localhost:3000/users/${clientName}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            setDonnees(donnees.filter(data => data.name !== clientName));
          } else {
            throw new Error('Erreur lors de la suppression du client.');
          }
        })
        .catch(error => {
          console.error('Erreur lors de la suppression du client :', error);
          alert('Une erreur est survenue lors de la suppression du client.');
        });
    }
  };

  // Fonction pour comparer les valeurs avec les seuils
  const comparerValeurs = (pho, amo, nit) => {
    if (pho > seuils.pho || amo > seuils.amo || nit > seuils.nit) {
      return 'Alerte';
    }
    return 'Normal';
  };

  return (
    <div className='aalt'>
      <div className="client-container">
        <input type="text" className="search-input" placeholder="Rechercher un client" onChange={handleSearch} value={searchTerm}></input>
        <Link to="/AjouterClient" className="primary-button alt">Ajouter un client</Link>
      </div>

      <div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Taux de phosphate</th>
              <th>Taux de nitrate</th>
              <th>Numero d'ammonium</th>
              <th>Etat d'alerte</th>
              <th className='sup'></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((element, index) => (
              <tr key={element._id}>
                <td>
                  <Link to={`/ProfilePage/${element.name}`}>
                    <button className='primary-button'>{element.name}</button>
                  </Link>
                </td>
                <td>{element.tauxPho ?? 'N/A'}</td>
                <td>{element.tauxAmo ?? 'N/A'}</td>
                <td>{element.tauxNit  ?? 'N/A'}</td>
                  <td>
                  {seuils.pho && seuils.amo && seuils.nit ?
                    comparerValeurs(element.tauxPho, element.tauxAmo, element.tauxNit) :
                    'Normal'}
                </td>
                <td className='sup'>
                  <button className='delete-button' onClick={() => handleDeleteClient(element.name)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pos'>
          <button className='primary-button' onClick={handlePrevPage} disabled={page === 1}>Page précédente</button>
          <button className='primary-button ' onClick={handleNextPage} disabled={lastIndex >= sortedData.length}>Page suivante</button>
        </div>
      </div>
    </div>
  );
}

export default DashTable;
