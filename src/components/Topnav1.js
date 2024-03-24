import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Logo from "../logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import './TopNav1.css';

const Topnav1 = () => {
  const location = useLocation();
  const { clientName } = useParams();

  const isDashboardAdmin = location.pathname === '/DashboardAdmin';
  const isMessagesPage = location.pathname === '/messages';
  const isProfilePage = location.pathname.includes('/ProfilePage/');

  return (
    <nav className='nav1'>
      {!isMessagesPage && (
        <div className='nav-logo-container'>
          <img src={Logo} alt="" className='image1'/>
        </div>
      )}
      {!isMessagesPage && (
        <div className='navbar-links-container'>
          {isDashboardAdmin ? (
            <span>Bienvenue Administrateur</span>
          ) : isProfilePage && clientName ? (
            <span>{`Bienvenue ${clientName}`}</span>
          ) : null}
          <a href="/">Accueil</a>
          <a href="/about">Qui sommes nous</a>
          <a href="/contact">Contact</a>
          {!isDashboardAdmin && <a href="/actualites">Actualités</a>}
          {!isDashboardAdmin && !isProfilePage ? (
            <Link to="/select-profile" className='primary-button'>Se connecter</Link>
          ) : null}
        </div>
      )}
      {!isMessagesPage && (
        <div className='navbar-menu-container'>
          <HiOutlineBars3 />
        </div>
      )}
    </nav>
  );
}

export default Topnav1;
