// src/components/HomePage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';




const HomePage = () => {
  return (
   
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1>Welcome to Mobile Store</h1>
          <p>Your one-stop shop for the latest mobile phones.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Latest Models</Card.Title>
              <Card.Text>
                Explore the latest models with advanced features and sleek designs.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Best Sellers</Card.Title>
              <Card.Text>
                Check out our best-selling mobile phones with top reviews.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Special Offers</Card.Title>
              <Card.Text>
                Don't miss out on our special offers and discounts on selected models.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
};

export default HomePage;
