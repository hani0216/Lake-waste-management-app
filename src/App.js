import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './Test.js';

import Topnav1 from './components/Topnav1';
import Home1 from './components/Home1';
import Apropos from './components/Apropos.js'
import About from "./components/About";

import SelectProfile from './components/SelectProfile';
import LoginClient from './components/loginClient.js';
import LoginAdmin from './components/loginAdmin.js';
import LoginAnpe from './components/loginAnpe.js';
const App = () => {
  return (
   
    <Router>
      <Topnav1 />
      <Routes>
        <Route exact path="/" element={<Home1 />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/select-profile" element={<SelectProfile />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/loginAnpe" element={<LoginAnpe />} />
          <Route path="/loginClient" element={<LoginClient />} />
         
      </Routes>
    </Router>
  );
}

export default App;
