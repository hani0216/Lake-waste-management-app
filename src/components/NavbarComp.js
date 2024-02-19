import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';

function NavbarComp() {
  return (
    <Router>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavbarComp;
