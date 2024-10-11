import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>About Us</h1>
          <p>Learn more about our company, values, and mission.</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide high-quality products and exceptional customer service. 
                We are committed to innovation and improving the lives of our customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                We believe in integrity, transparency, and sustainability. Our team works hard to uphold these values in everything we do.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our History</Card.Title>
              <Card.Text>
                Founded in 2020, we have grown from a small startup to a leading company in our industry. Our journey has been driven by passion and dedication.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                Our team consists of experts in their fields, all working together to deliver the best products and experiences to our customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
