import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home'; 
import SelectProfile from './SelectProfile.js';
import LoginClient from './loginClient.js';
import LoginAdmin from './loginAdmin.js';
import LoginAnpe from './loginAnpe.js';
import DashboardCl from './Dashboard/Dashboard_Client/DashboardCl.js';
import Apropos from './Apropos.js';
import './Navbar.css'
const TopNav = () => {
  return (
    <Router>
      <div >
        <Navbar bg="primary" variant="dark">   
          <Navbar.Brand className='test' href="#">EcoPact</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/about">Qui sommes nous</Nav.Link>
            <Nav.Link className='conNav' href="/SelectProfile">Se connecter</Nav.Link>
          </Nav>
          
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Apropos/>} />
          <Route path="/SelectProfile" element={<SelectProfile />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/loginAnpe" element={<LoginAnpe />} />
          <Route path="/loginClient" element={<LoginClient />} />
          <Route path='/DadhboardCl' element={<DashboardCl/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default TopNav;
