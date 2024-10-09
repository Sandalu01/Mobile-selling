import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import teamImage from "../assets/Images/team.jpg"; 

const AboutUs = () => {
  return (
    <Container className="about-us py-5">
      {/* Vision Section */}
      <Row className="text-center mb-4">
        <Col>
          <h1>Empowering Innovation</h1>
          <p>We bring you the future of mobile technology, one device at a time.</p>
        </Col>
      </Row>

      {/* Timeline Section */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>Our Beginnings</Card.Title>
              <Card.Text>We started in 2024 with big dreams and a passion for mobile technology.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>Our Breakthrough</Card.Title>
              <Card.Text>By 2025, we launched eco-friendly phones, making a global impact.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>Where We Are Now</Card.Title>
              <Card.Text>Today, we serve thousands of customers with cutting-edge devices.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="text-center mb-4">
        <Col>
          <Image src={teamImage} roundedCircle fluid alt="Our Team" className="mb-3" />
          <h2>Meet Our Team</h2>
          <p>We are tech enthusiasts committed to shaping the future of mobile technology.</p>
          <Button variant="primary">Connect With Us</Button>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="text-center">
        <Col>
          <h3>Join Our Journey</h3>
          <Button variant="success" href="/contact">Get in Touch</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
