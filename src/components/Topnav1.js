import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";


const Topnav1 = () => {
  return (
    <nav>
      <div className='nav-logo-container'>
        <img className='maram' src={Logo} alt="" />
      </div>
      <div className='navbar-links-container'>
        <a href="/">Acceuil</a>
        <a href="/about">Qui sommes nous</a>
        <a href="">Actualités</a>
        <a href="">Contact</a>
        <Link to="/select-profile" className='primary-button'>Se connecter</Link>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 />
      </div>
    </nav>
  );
}

export default Topnav1;
