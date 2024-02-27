import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Si vous utilisez Axios pour les requêtes HTTP

function Test() { // Changer le nom de la fonction de App à Main
   const [users, setUsers] = useState([]);

   useEffect(() => {
      async function fetchUsers() {
         try {
            const response = await axios.get('/api/users'); // Exemple de route pour récupérer les utilisateurs
            setUsers(response.data);
         } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
         }
      }

      fetchUsers();
   }, []);

   return (
      <div>
         <h1>Liste des utilisateurs</h1>
         <ul>
            {users.map(user => (
               <li key={user._id}>
                  <p>Nom: {user.nom}</p>
                  <p>Email: {user.email}</p>
                  <p>Numéro de téléphone: {user.num_tel}</p>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Test; // Exporter Main à la place de App
