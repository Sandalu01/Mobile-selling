// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaInfoCircle } from 'react-icons/fa';

const NaviBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"> 📱 MobileMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
            <Nav.Link as={Link} to="/login"> <FaSignInAlt /> Login</Nav.Link>
            <Nav.Link as={Link} to="/signup"> <FaUserPlus /> Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/about"> <FaInfoCircle /> About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
