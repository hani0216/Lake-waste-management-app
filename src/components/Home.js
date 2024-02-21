import React, { useState, useEffect } from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './licensed-image.jpg';
import './Home.css'; // Importation du fichier CSS pour styliser la page

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [welcomeText, setWelcomeText] = useState("Bienvenue sur notre site");

  const images = [img1, img2, img3];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeText("Nouvelles offres disponibles !");
      setTimeout(() => {
        setWelcomeText("Bienvenue sur notre site");
      }, 5000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Première section avec la première image en fond d'écran */}
      <section className="first-section">
        <div className="overlay"></div>
        <div className="text-container">
          <h2 className="welcome-text">{welcomeText}</h2>
          <p>Ceci est un texte descriptif pour la première image.</p>
        </div>
      </section>

      {/* Deuxième section avec la deuxième image */}
      <section className="second-section">
        <div className="text-container">
          <h2>Deuxième Image</h2>
          <p>Ceci est un texte descriptif pour la deuxième image.</p>
        </div>
        <img src={img2} alt="Image 2" />
      </section>

      {/* Troisième section avec la troisième image */}
      <section className="third-section">
        <div className="text-container">
          <h2>Troisième Image</h2>
          <p>Ceci est un texte descriptif pour la troisième image.</p>
        </div>
        <img src={img3} alt="Image 3" />
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-section left-section">
            <h3>Ecopact</h3>
            <ul>
              <li><a href="#">Présentation</a></li>
              <li><a href="#">Actualités</a></li>
              <li><a href="#">Sponsors et partenaires</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section middle-section">
            <h3>Participer</h3>
            <ul>
              <li><a href="#">Événement 1 </a></li>
              <li><a href="#">Événement 2</a></li>
              <li><a href="#">Événement 3</a></li>
              <li><a href="#">Événement 4 </a></li>
            </ul>
          </div>
          <div className="footer-section right-section">
            <h3>Contact</h3>
            <p>Adresse: 123 Rue du Commerce</p>
            <p>Email: contact@ecopact.com</p>
            <p>Téléphone: +123456789</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
