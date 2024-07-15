import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SpecialOffers = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1>New Arrivals</h1>
          <p>Discover the newest arrivals in the mobile phone market.</p>
        </Col>
      </Row>
      <Row>
        {/* Add content for new arrivals here */}
      </Row>
    </Container>
  );
};

export default SpecialOffers;
