import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SideBarCl.css';

function SideBarCl() {
  const { email } = useParams(); // Récupérer l'email depuis les paramètres d'URL

  const handleLogout = () => {
    const confirmLogout = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if (confirmLogout) {
      // Redirection vers la page de déconnexion
      window.location.href = "/loginClient";
    }
  };

  return (
    <div>
      <nav id="nav-bar">
        <div id="nav-header">
          <h3>Bienvenue !</h3> {/* Utiliser le clientName récupéré */}
          <label htmlFor="nav-toggle"></label>
          <hr />
        </div>
        <div id="nav-content"> 
         
          <Link to="/DashboardClient/${email}" className="nav-button">
            <i className="fas fa-thumbtack"></i>
            <span>Tableau de board</span>
          </Link>
          <Link to="/messages" className="nav-button">
            <i className="fas fa-thumbtack"></i>
            <span>Notifications</span>
          </Link>
          <Link to={`/edit-profile/${email}`} className="nav-button"> {/* Utilisez email ici */}
            <i className="fas fa-cog"></i>
            <span>Modifier le profil</span>
          </Link>
          <Link to="/loginClient" className="nav-button" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Déconnexion</span>
          </Link>
        </div> 
      </nav>
    </div>
  );
}

export default SideBarCl;
