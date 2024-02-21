import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home'; // Importer la page Home
import SelectProfile from './SelectProfile.js';
import LoginClient from './loginClient.js';
import Apropos from './Apropos.js';

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Apropos/>} />
          <Route path="/SelectProfile" element={<SelectProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default TopNav;
