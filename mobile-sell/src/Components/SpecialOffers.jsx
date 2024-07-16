import React from 'react';
import { Container, Row, Col, Card ,Button} from 'react-bootstrap';

const SpecialOffers = () => {
  return (
    <Container className="new-arrivals-container">
    <Row className="mb-5 text-center">
      <Col>
        <h1 className="display-4">New Arrivals</h1>
        <p className="lead">Discover the newest arrivals in the mobile phone market.</p>
      </Col>
    </Row>
    <Row>
      {/* Add content for new arrivals here */}
      <Col md={4}>
        <Card className="mb-4 shadow-sm">
          <Card.Img variant="top" src="phone-image.jpg" alt="New Arrival Phone" />
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
          <Card.Img variant="top" src="phone-image.jpg" alt="New Arrival Phone" />
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
          <Card.Img variant="top" src="phone-image.jpg" alt="New Arrival Phone" />
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

export default SpecialOffers;
