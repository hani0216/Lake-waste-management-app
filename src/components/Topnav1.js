import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import './TopNav1.css'


const Topnav1 = () => {
  return (
    <nav className='nav1'>
      <div className='nav-logo-container'>
        <img src={Logo} alt=""  className='image1'/>
      </div>
      <div className='navbar-links-container'>
        <a href="/">Acceuil</a>
        <a href="/about">Qui sommes nous</a>
        <a href="">Actualités</a>
        <a href="/Contact">Contact</a>
        <Link to="/select-profile" className='primary-button'>Se connecter</Link>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 />
      </div>
    </nav>
  );
}

export default Topnav1;
