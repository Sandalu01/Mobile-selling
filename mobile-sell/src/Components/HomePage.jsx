// src/components/HomePage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';





const HomePage = () => {
  return (
   
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1>Welcome to Sandalu's Store 😊</h1>
          <p>Your one-stop shop for the latest mobile phones.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/827502902/photo/mobile-smartphone-in-electronic-store.jpg?s=612x612&w=0&k=20&c=G3jkr0uLHBR-c8Bi0405JvhL5F-sB7Ln-bYTRbqt3hw=" />
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
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1974018816/photo/a-lot-of-smartphone-models-on-display-at-the-exhibition-stand-of-an-electronics-store.jpg?s=612x612&w=0&k=20&c=MXodjllbFmCKYQVV0fMQzZliIkm6-oH2X6gqugqAc7g=" />
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
            <Card.Img variant="top" src="https://img.freepik.com/free-psd/gradient-black-friday-template-design_23-2149706962.jpg?size=626&ext=jpg&ga=GA1.1.6752989.1717871726&semt=ais_user" />
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
