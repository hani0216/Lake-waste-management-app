import React from 'react';
import HomeCarousel from './HomeCarousel'; // Importer le composant HomeCarousel

function Home() {
  return (
    <div>
      <HomeCarousel /> {/* Utiliser le composant HomeCarousel uniquement dans la page Home */}
      {/* Autres contenus de la page Home */}
    </div>
  );
}

export default Home;
