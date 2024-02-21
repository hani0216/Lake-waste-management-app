import React from 'react';
import './App.css';

import FirstPage from './components/SelectProfile.js';
import TopNav from './components/TopNav';
import Home from './components/Home.js';
import HomeCarousel from './components/HomeCarousel';




function App() {
  return (
    <div >
      <TopNav />
      <Home  />
    </div>
  );
}

export default App;

