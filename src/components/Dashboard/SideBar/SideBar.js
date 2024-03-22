import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if (confirmLogout) {
      // Redirection vers la page de déconnexion
      window.location.href = "/loginAdmin";
    }
  };

  return (
    <div>
      <nav id="nav-bar">
        <div id="nav-header">
          <h3>Bienvenue !</h3>  
          <label htmlFor="nav-toggle">
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <Link to="/DashboardAdmin" className="nav-button">
            <i className="fas fa-palette"></i>
            <span>Tableau de board</span>
          </Link>   
          <div className="nav-button">
            <i className="fas fa-images"></i>
            <span>Profile</span>
          </div>
          <Link to="/messages" className="nav-button">
  <i className="fas fa-thumbtack"></i>
  <span>Messages</span>
</Link>

          <Link to="/loginAdmin" className="nav-button" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
            <span>Déconnexion</span>
          </Link>
        </div> 
      </nav>
    </div>
  );
}

export default SideBar;
