// DashboardClient.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileClient.css';

function ProfileClient() {
  const [user, setUser] = useState(null);
  const { email } = useParams(); // Utilisez le paramètre d'email
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/users/email/${email}`) // Utilisez la nouvelle route avec l'email
    .then(response => response.json())
      .then(data => {
        setUser(data);
        setUserName(data.name);
      })
      .catch(error => console.error('Erreur lors de la récupération des données de l\'utilisateur : ', error));
  }, [email]); // Utilisez le paramètre d'email

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 class= "marouma">Bienvenue <br/>{userName}!</h1> {/* Utilisez le nom d'utilisateur récupéré */}
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

export default ProfileClient;
