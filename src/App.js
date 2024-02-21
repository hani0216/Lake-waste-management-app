import React from 'react';
import './App.css';

import FirstPage from './components/SelectProfile.js';
import TopNav from './components/TopNav';
import Home from './components/Home.js';




function App() {
  return (
    <div className='allbody' >
      <TopNav />
      <Home  />
    </div>
  );
}

export default App;

