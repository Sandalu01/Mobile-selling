import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import back1 from '../assets/Images/back1.jpg';
import back2 from '../assets/Images/back2.jpg';
import back3 from '../assets/Images/back3.jpg';

const LatestModelsPage = () => {


  const navigate = useNavigate();

    const handleClick = () => {
      
    navigate('/payment');
  };
  return (
    <Container className="latest-models-container">
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4">Latest Models</h1>
          <p className="lead">Explore the latest models with advanced features and sleek designs.</p>
        </Col>
      </Row>
      <Row>
        {/* Add content for latest models here */}
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={back1} alt="Latest Model 1" />
            <Card.Body>
              <Card.Title>Model 1</Card.Title>
              <Card.Text>
                A brief description of the latest model goes here.
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>
      Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1507080527/photo/iphone-14-pro-max-backside-rear-view-with-camera-block-and-apple-logotype-isolated-on-white.jpg?s=612x612&w=0&k=20&c=U2-049YBkBrU-s0VPhrh3HNSAaJJ-TaYNqaL7-yAD2o=" alt="Latest Model 2" />
            <Card.Body>
              <Card.Title>Model 2</Card.Title>
              <Card.Text>
                A brief description of the latest model goes here.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1308776367/photo/iphone-12-pro-max-pasific-blue.jpg?s=612x612&w=0&k=20&c=NLmtH3d4TgKYuhwvZ8gAuJY5r_CrcQH6JTHNAfTm7CM=" alt="Latest Model 3" />
            <Card.Body>
              <Card.Title>Model 3</Card.Title>
              <Card.Text>
                A brief description of the latest model goes here.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LatestModelsPage;
