import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const ProductCard = ({ product, onAddToCart }) => (
  <Col md={4} className="mb-3">
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} alt="Product Image" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
        <BuyButton onAddToCart={onAddToCart} />
      </Card.Body>
    </Card>
  </Col>
);

const Payment = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); 
    // Hide alert after 3 seconds
  };

  const products = [
    {
      name: 'Product 1',
      description: 'This is a detailed description of product 1.',
      price: '$99.99',
      image: 'https://img.freepik.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user'
    },
    {
      name: 'Product 2',
      description: 'This is a detailed description of product 2.',
      price: '$199.99',
      image: 'https://img.freepik.com/free-photo/ramadan-phone-14-screen-lantern-front-view-white-background_187299-35103.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user'
    },
    {
      name: 'Product 3',
      description: 'This is a detailed description of product 3.',
      price: '$299.99',
      image: 'https://img.freepik.com/free-photo/phone-14-front-side-arabic-themed-background_187299-35431.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user'
    },
    {
      name: 'Product 3',
      description: 'This is a detailed description of product 3.',
      price: '$299.99',
      image: 'https://img.freepik.com/free-photo/phone-14-front-side-arabic-themed-background_187299-35431.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user'
    },
    {
      name: 'Product 1',
      description: 'This is a detailed description of product 1.',
      price: '$99.99',
      image: 'https://img.freepik.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user'
    },
    {
      name: 'Product 2',
      description: 'This is a detailed description of product 2.',
      price: '$199.99',
      image: 'https://img.freepik.com/free-photo/ramadan-phone-14-screen-lantern-front-view-white-background_187299-35103.jpg?size=626&ext=jpg&ga=GA1.1.1435214330.1722094459&semt=ais_user'
    },
  ];

  return (
    <Container>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Product added to cart!
        </Alert>
      )}
      <Row className="justify-content-start">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onAddToCart={handleAddToCart} />
        ))}
      </Row>
    </Container>
  );
};

export default Payment;
