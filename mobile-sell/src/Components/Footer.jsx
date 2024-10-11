import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(45deg, #343a40, #1c1e21)', color: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        <Row>
          <Col className="text-center">
            <h5 className="mb-3">Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" className="text-white mx-2" aria-label="Facebook">
                <FaFacebook size={30} className="social-icon" />
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2" aria-label="Twitter">
                <FaTwitter size={30} className="social-icon" />
              </a>
              <a href="https://www.instagram.com" className="text-white mx-2" aria-label="Instagram">
                <FaInstagram size={30} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" className="text-white mx-2" aria-label="LinkedIn">
                <FaLinkedin size={30} className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <h6>Contact Us</h6>
            <p>123 Main Street, Colombo, Sri Lanka</p>
            <p>Email: <a href="mailto:info@mymobilestore.com" className="text-white">sandaluthushan20@gmailcom</a></p>
            <p>Phone: <a href="tel:+94123456789" className="text-white">+94 76 1136338</a></p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Mobile Store. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .social-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-5px);
          color: #17a2b8;
        }

        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
