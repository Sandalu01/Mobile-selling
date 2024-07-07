import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const AboutUs = () => {
  return (
    <div className="about">
    <Container className="about-us">
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                Welcome to MobileMart, your number one source for all things mobile. 
                We're dedicated to giving you the very best of mobile devices, with a focus on dependability, customer service, and uniqueness.
              </Card.Text>
              <Card.Text>
                Founded in 2024, MobileMart has come a long way from its beginnings. 
                When we first started out, our passion for eco-friendly cleaning products drove us to do tons of research, so that MobileMart can offer you the world's most advanced mobiles. 
                We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
              </Card.Text>
              <Card.Text>
                We hope you enjoy our products as much as we enjoy offering them to you. 
                If you have any questions or comments, please don't hesitate to contact us.
              </Card.Text>
              <Card.Text>
                Sincerely,<br />
                MobileMart Team
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AboutUs;
