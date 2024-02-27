import React from 'react';
import Logo from "../logo.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import './Footer.css' ;

const Footer = () => {
  return (
    <div className='footer-container sticky-footer'>
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className='footer-section-one'>
          <div className='footer-logo-container'>
            <img src={Logo} alt="" />
          </div>
          <div className='footer-icons'>
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebook />
          </div>
        </div>
        <div className='footer-section-two'>
          <div className='footer-section-columns white-text'>
            <span>ECOPACT</span>
            <span>Présentation</span>
            <span>Actualités</span>
            <span>Sponsors et partenaires</span>
            <span>Contact</span>
          </div>
          <div className='footer-section-columns white-text'>
            <span>+216 10 10 10 10</span>
            <span>ecopact@gmail.com</span>
            <span>press@gmail.com</span>
            <span>contact@gmail.com</span>
          </div>
          <div className='footer-section-columns white-text'>
            <span>Terms & Conditions</span>
            <span>Privacy & Policy</span>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Footer;
