import React from 'react'
import Topnav1 from './Topnav1'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import { FiArrowRight } from "react-icons/fi"
import About from './About'
import Footer from './Footer'
const Home1 = () => {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>ECOPACT 
          Bienvenue sur notre site</h1>
          <p className='primary-text'>EcoPact est une plateforme conçue pour instaurer une solution de surveillance novatrice au lac de Bizerte, avec pour objectif d'enrichir la gestion des déchets dans cette zone d'une importance capitale...</p>
          <button className='secondary-button'>See more <FiArrowRight /></button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home1
