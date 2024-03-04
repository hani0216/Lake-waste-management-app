import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
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
           <div className="nav-button"><i className="fas fa-images"></i><span>Profile</span></div>
          <div className="nav-button"><i className="fas fa-thumbtack"></i><span>Messages</span></div>
          <div className="nav-button"><i className="fas fa-thumbtack"></i><span>Déconnexion</span></div>
        </div> 
      </nav>
    </div>
  );
}

export default SideBar;
