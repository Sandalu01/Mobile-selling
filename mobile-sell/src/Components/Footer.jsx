import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Mobile Store. All Rights Reserved.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <a href="https://www.facebook.com" className="text-white mx-2" aria-label="Facebook">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" className="text-white mx-2" aria-label="Twitter">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" className="text-white mx-2" aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" className="text-white mx-2" aria-label="LinkedIn">
              <FaLinkedin size={30} />
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>123 Main Street, Colombo, Sri Lanka</p>
            <p>Email: info@mymobilestore.com | Phone: +94 123 456 789</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
