import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BuyButton = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart();
  };

  const handlePayNow = () => {
    navigate('/payment');
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleAddToCart} style={{ marginRight: '10px', marginTop: '20px' }}>
        Add to Cart
      </Button>
      <Button variant="primary" onClick={handlePayNow} style={{ marginTop: '20px' }}>
        Pay Now
      </Button>
    </div>
  );
};

const Payment = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <Container>
      <Row className="justify-content-start">
        <Col md={4}>
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Product added to cart!
            </Alert>
          )}
          <Card className="mt-3">
            <Card.Img variant="top" src="https://via.placeholder.com/400x200" alt="Product Image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                This is a detailed description of the product. It has all the features and specifications you need to know before making a purchase.
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> $99.99
              </Card.Text>
              <BuyButton onAddToCart={handleAddToCart} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Product added to cart!
            </Alert>
          )}
          <Card className="mt-3">
            <Card.Img variant="top" src="https://via.placeholder.com/400x200" alt="Product Image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                This is a detailed description of the product. It has all the features and specifications you need to know before making a purchase.
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> $99.99
              </Card.Text>
              <BuyButton onAddToCart={handleAddToCart} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
