import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import back1 from '../assets/Images/back1.jpg';

const models = [
  {
    id: 1,
    imgSrc: back1,
    alt: "Latest Model 1",
    title: "Model 1",
    description: "A brief description of the latest model goes here.",
    buttonText: "Buy",
    handleClick: (navigate) => navigate('/payment'),
  },
  {
    id: 2,
    imgSrc: "https://media.istockphoto.com/id/1507080527/photo/iphone-14-pro-max-backside-rear-view-with-camera-block-and-apple-logotype-isolated-on-white.jpg?s=612x612&w=0&k=20&c=U2-049YBkBrU-s0VPhrh3HNSAaJJ-TaYNqaL7-yAD2o=",
    alt: "Latest Model 2",
    title: "Model 2",
    description: "A brief description of the latest model goes here.",
    buttonText: "View Details",
    handleClick: () => {},
  },
  {
    id: 3,
    imgSrc: "https://media.istockphoto.com/id/1308776367/photo/iphone-12-pro-max-pasific-blue.jpg?s=612x612&w=0&k=20&c=NLmtH3d4TgKYuhwvZ8gAuJY5r_CrcQH6JTHNAfTm7CM=",
    alt: "Latest Model 3",
    title: "Model 3",
    description: "A brief description of the latest model goes here.",
    buttonText: "View Details",
    handleClick: () => {},
  },

  {
    id: 4,
    imgSrc: "https://media.istockphoto.com/id/1308776367/photo/iphone-12-pro-max-pasific-blue.jpg?s=612x612&w=0&k=20&c=NLmtH3d4TgKYuhwvZ8gAuJY5r_CrcQH6JTHNAfTm7CM=",
    alt: "Latest Model 3",
    title: "Model 3",
    description: "A brief description of the latest model goes here.",
    buttonText: "View Details",
    handleClick: () => {},
  },
  {
    id: 3,
    imgSrc: "https://media.istockphoto.com/id/1308776367/photo/iphone-12-pro-max-pasific-blue.jpg?s=612x612&w=0&k=20&c=NLmtH3d4TgKYuhwvZ8gAuJY5r_CrcQH6JTHNAfTm7CM=",
    alt: "Latest Model 3",
    title: "Model 3",
    description: "A brief description of the latest model goes here.",
    buttonText: "View Details",
    handleClick: () => {},
  },
  {
    id: 3,
    imgSrc: "https://media.istockphoto.com/id/1308776367/photo/iphone-12-pro-max-pasific-blue.jpg?s=612x612&w=0&k=20&c=NLmtH3d4TgKYuhwvZ8gAuJY5r_CrcQH6JTHNAfTm7CM=",
    alt: "Latest Model 3",
    title: "Model 3",
    description: "A brief description of the latest model goes here.",
    buttonText: "View Details",
    handleClick: () => {},
  },

];

const LatestModelsPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="latest-models-container">
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4">Latest Models</h1>
          <p className="lead">Explore the latest models with advanced features and sleek designs.</p>
        </Col>
      </Row>
      <Row>
        {models.map((model) => (
          <Col md={4} key={model.id}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={model.imgSrc} alt={model.alt} />
              <Card.Body>
                <Card.Title>{model.title}</Card.Title>
                <Card.Text>{model.description}</Card.Text>
                <Button variant="primary" onClick={() => model.handleClick(navigate)}>
                  {model.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestModelsPage;
