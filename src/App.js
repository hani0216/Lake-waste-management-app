import React from 'react';
import './App.css';

import FirstPage from './components/SelectProfile.js';
import TopNav from './components/TopNav';
import Login from './components/Login/loginAdmin.js';
import Home from './components/Home.js';




function App() {
  return (
    <div >
      <TopNav />
      <Home  />
    </div>
  );
}

export default App;

