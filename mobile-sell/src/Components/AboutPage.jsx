import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import teamImage from "../assets/Images/team.jpg"; // Replace with your actual image

const AboutUs = () => {
  return (
    <Container className="about-us mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">Our Journey</h1>
          <p className="lead">From passion to innovation, we're here to revolutionize the mobile industry!</p>
        </Col>
      </Row>

      <Row className="justify-content-md-center mb-4">
        <Col md="8">
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4">About MobileMart</Card.Title>
              <Card.Text className="text-justify">
                Welcome to <strong>MobileMart</strong>, your premier destination for cutting-edge mobile technology! 
                Our mission is to provide reliable, high-quality mobile devices that fit your unique lifestyle. 
                At MobileMart, we blend innovation with exceptional customer service to bring you a seamless experience.
              </Card.Text>
              <Card.Text className="text-justify">
                Founded in 2024, MobileMart was born out of a passion for technology and a vision to push boundaries. 
                We believe in bringing the future into your hands, one mobile device at a time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Row className="justify-content-md-center mb-4">
        <Col md="8">
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4">Our Story</Card.Title>
              <Card.Text>
                <strong>2024:</strong> MobileMart begins its journey. A dream fueled by a desire to make innovative mobile devices accessible worldwide.
              </Card.Text>
              <Card.Text>
                <strong>2025:</strong> We launch our first range of eco-friendly mobile accessories, integrating sustainability into our technology.
              </Card.Text>
              <Card.Text>
                <strong>2026:</strong> MobileMart expands globally, reaching customers across continents and breaking new grounds in mobile technology.
              </Card.Text>
              <Card.Text>
                Today, we continue to grow, adapting to the ever-changing technological landscape while staying true to our core values: innovation, quality, and customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      <Row className="justify-content-md-center mb-5">
        <Col md="8">
          <Card className="text-center p-4 shadow-lg">
            <Image src={teamImage} roundedCircle fluid className="mb-3" alt="Our Team" />
            <Card.Body>
              <Card.Title>Meet Our Team</Card.Title>
              <Card.Text>
                At MobileMart, we’re not just a company; we’re a family of tech enthusiasts, innovators, and customer-first thinkers. 
                Our team is dedicated to making your experience with us extraordinary.
              </Card.Text>
              <Card.Text>
                Whether you're here to shop for the latest gadgets or simply explore, we're excited to have you with us on this journey!
              </Card.Text>
              <Card.Text>
                <strong>Sincerely,</strong><br />
                The MobileMart Team
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
