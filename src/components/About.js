import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage}  alt=''></img>
        </div>
        <div className='about-section-text-container'>
                
                <h1 className='primary-heading3'>A propos du programme</h1>
                <p className='primary-text'>Le bassin versant du Lac de Bizerte représente un pôle de développement important pour le gouvernorat de Bizerte. Il se caractérise par de grandes agglomérations urbaines et diverses activités industrielles et commerciales...</p>
                <div className='about-buttons-coontainer'>
                    <button className='secondary-button'>Learn more!</button>
                   
                </div>
        </div>
  </div>)
}

export default About