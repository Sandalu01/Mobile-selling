import React from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';

const BestSellersPage = () => {
  return (
    <Container className="best-sellers-container">
    <Row className="mb-5 text-center">
      <Col>
        <h1 className="display-4">Best Sellers</h1>
        <p className="lead">Discover our top-rated mobile phones with excellent reviews.</p>
      </Col>
    </Row>
    <Row>
  
      <Col md={4}>
        <Card className="mb-4 shadow-sm">
          <Card.Img variant="top" src="https://img.freepik.com/free-photo/happy-redhead-girl-showing-smartphone-screen-empty-phone-looking-amazed-checking-out-application-standing-white_176420-40075.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user" alt="Best Seller Phone" />
          <Card.Body>
            <Card.Title>Phone Model 1</Card.Title>
            <Card.Text>
              A brief description of the phone model goes here.
            </Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="mb-4 shadow-sm">
          <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-woman-red-shirt-round-eyeglasses_273609-41264.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user" alt="Best Seller Phone" />
          <Card.Body>
            <Card.Title>Phone Model 2</Card.Title>
            <Card.Text>
              A brief description of the phone model goes here.
            </Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="mb-4 shadow-sm">
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/15/31/58/240_F_315315898_dHWiHA3eAoWNeYPkqG86rVUCStoRo8pI.jpg" alt="Best Seller Phone" />
          <Card.Body>
            <Card.Title>Phone Model 3</Card.Title>
            <Card.Text>
              A brief description of the phone model goes here.
            </Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default BestSellersPage;
