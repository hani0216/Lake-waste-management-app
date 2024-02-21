import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './licensed-image.jpg';

const images = [
  { src: image1, title: 'Bienvenue ...', description: 'Net’Léman est une action de nettoyage des rives et des fonds du Léman déclinée dans une quinzaine de secteurs sur tout le pourtour du Léman.' },
  { src: image2, title: 'à propos', description: 'nous sommes ....' },
  { src: image3, title: 'Plus d\'infos', description: 'pour plus d\'informations' }
];

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
              style={{ maxHeight: '500px', objectFit: 'cover' }}
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

export default HomeCarousel;
