import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BestSellersPage = () => {
  return (
    <Container className="best">
      <Row className="mb-4">
        <Col>
          <h1>Best Sellers</h1>
          <p>Check out our best-selling mobile phones with top reviews.</p>
        </Col>
      </Row>
      <Row>
        {/* Add content for best sellers here */}
      </Row>
    </Container>
  );
};

export default BestSellersPage;
