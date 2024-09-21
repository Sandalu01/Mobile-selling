import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import teamImage from "../assets/Images/team.jpg"; 

const AboutUs = () => {
  return (
    <Container className="about-us mt-10">
      {/* Our Vision Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">Empowering Innovation, One Device at a Time</h1>
          <p className="lead">
            At MobileMart, we're not just selling phones. We're crafting the future of mobile technology, where every click counts and every touch feels like magic.
          </p>
        </Col>
      </Row>

      {/* Storytelling Timeline */}
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="p-3 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-3">Our Humble Beginnings</Card.Title>
              <Card.Text>
                In 2024, we started in a small garage with big dreams. With a passion for mobile technology and an obsession for quality, MobileMart was born.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="p-3 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-3">Our Breakthrough</Card.Title>
              <Card.Text>
                By 2025, we launched our first range of eco-friendly phones, leading the charge in sustainable tech and making waves globally.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="p-3 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-3">Where We Stand Now</Card.Title>
              <Card.Text>
                Today, we serve thousands of satisfied customers worldwide, providing cutting-edge devices that combine sleek design with advanced functionality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="justify-content-center mb-5">
        <Col md="8">
          <Card className="text-center p-5 shadow-lg">
            <Image src={teamImage} roundedCircle fluid className="mb-4" alt="Our Team" />
            <Card.Body>
              <Card.Title>Meet the Minds Behind MobileMart</Card.Title>
              <Card.Text>
                We’re a group of tech enthusiasts, innovators, and dreamers united by one mission: to bring the future of mobile technology to you.
              </Card.Text>
              <Card.Text>
                Whether you're looking for the latest in mobile innovation or just need advice on your next purchase, our team is here to guide you.
              </Card.Text>
              <Button variant="primary">Connect With Us</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h2>Be Part of Our Journey!</h2>
          <p>
            Join us as we continue to redefine the mobile industry. Whether you're here to explore or to be amazed, there's always something new at MobileMart.
          </p>
          <Button variant="success" href="/contact">
            Get in Touch
          </Button>
        </Col>
      </Row>

      {/* Call to Action */}
   
    </Container>
  );
};

export default AboutUs;
