import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home.js';
import SelectProfile from './SelectProfile.js'
import LoginClient from './Login/loginClient.js'

function TopNav() {
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
          <Route path="/about" element={<LoginClient />} />
          <Route path="/SelectProfile" element={<SelectProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default TopNav;
