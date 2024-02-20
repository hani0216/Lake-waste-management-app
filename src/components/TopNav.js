import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './licensed-image.jpg';
import Home from './Home.js';
import SelectProfile from './SelectProfile.js';
import LoginClient from './loginClient.js';

const images = [
  { src: image1, title: 'Bienvenue ...', description: 'Net’Léman est une action de nettoyage des rives et des fonds du Léman déclinée dans une quinzaine de secteurs sur tout le pourtour du Léman.' },
  { src: image2, title: 'à propos', description: 'nous sommes ....' },
  { src: image3, title: 'Plus d\'infos', description: 'pour plus d\'informations' }
];

const TopNav = () => {
  return (
    <Router>
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#">Nom d'application</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/SelectProfile">Log in</Nav.Link>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/about" element={<LoginClient />} />
          <Route path="/SelectProfile" element={<SelectProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomeCarousel = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Carousel interval={null}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.title}
              style={{ maxHeight: '500px', objectFit: 'cover' }} // Ajustez la taille de l'image ici
            />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TopNav;
