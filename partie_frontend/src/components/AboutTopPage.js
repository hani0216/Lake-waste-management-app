import React from 'react';
import './AboutCards/AboutTopPage.css'
import Logo from '../logo.png'

function AboutTopPage() {
  return (
    <div>
        <div className='topabt'>
            <div className='description'> 
        <div className='parDesc'>
        <h1>EcoPact</h1>
            <p>EcoPact est une plateforme conçue pour instaurer une solution de surveillance novatrice au lac de Bizerte, avec pour objectif d'enrichir la gestion des déchets dans cette zone d'une importance capitale. Cette application, réalisée par les étudiants de deuxième année, Hani Mediouni et Maram Abaidi, dans le cadre de leur projet de fin d'année, est encadrée par la Dr. Ingénieur Meriem Kassar. Son ambition est d'apporter une réponse ciblée aux défis environnementaux en offrant des outils de suivi avancés et une analyse pointue des données. En collaborant étroitement avec les parties prenantes et les autorités locales, EcoPact s'engage à préserver la santé écologique de ce précieux écosystème.</p>
        </div>
            <img className='imgDesc' src={Logo} alt="logo"></img>
           </div>
        </div>
    </div>
  );
}

export default AboutTopPage;
