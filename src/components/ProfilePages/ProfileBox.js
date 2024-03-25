import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProfileBox() {
  const [user, setUser] = useState(null);
  const { clientName } = useParams(); // Utilisez clientName
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/users/${clientName}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setUserName(data.name);
      })
      .catch(error => console.error('Erreur lors de la récupération des données de l\'utilisateur : ', error));
  }, [clientName]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Bienvenue {clientName}</h1>
      <div class="card">
        <div className='infobox'>
          <div class="cover-photo">
            <img src="https://i.imgur.com/KykRUCV.jpeg" class="profile" alt="Profile"></img>
          </div>
          <h3 class="profile-name">{user.name}</h3>
          <p class="about">{user.email}</p>
          <p class="about">{user.address}</p>
          <p class="about">{user.phoneNumber}</p>
         
          <div class="icons">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
