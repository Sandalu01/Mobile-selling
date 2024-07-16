import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

const LatestModelsPage = () => {
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
            <Card.Img variant="top" src="latest-model1.jpg" alt="Latest Model 1" />
            <Card.Body>
              <Card.Title>Model 1</Card.Title>
              <Card.Text>
                A brief description of the latest model goes here.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="latest-model2.jpg" alt="Latest Model 2" />
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
            <Card.Img variant="top" src="latest-model3.jpg" alt="Latest Model 3" />
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
