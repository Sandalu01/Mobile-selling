
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import ExampleCarouselImage from './ExampleCarouselImage';

const cardData = [
  {
    id: 1,
    title: 'Latest Models',
    description: 'Explore the latest models with advanced features and sleek designs.',
    image: 'https://media.istockphoto.com/id/827502902/photo/mobile-smartphone-in-electronic-store.jpg?s=612x612&w=0&k=20&c=G3jkr0uLHBR-c8Bi0405JvhL5F-sB7Ln-bYTRbqt3hw=',
    url: '/latest-models',
  },
  {
    id: 2,
    title: 'Best Sellers',
    description: 'Check out our best-selling mobile phones with top reviews.',
    image: 'https://media.istockphoto.com/id/1974018816/photo/a-lot-of-smartphone-models-on-display-at-the-exhibition-stand-of-an-electronics-store.jpg?s=612x612&w=0&k=20&c=MXodjllbFmCKYQVV0fMQzZliIkm6-oH2X6gqugqAc7g=',
    url: '/best-sellers',
  },
  {
    id: 3,
    title: 'Special Offers',
    description: "Don't miss out on our special offers and discounts on selected models.",
    image: 'https://img.freepik.com/free-psd/gradient-black-friday-template-design_23-2149706962.jpg?size=626&ext=jpg&ga=GA1.1.6752989.1717871726&semt=ais_user',
    url: '/special-offers',
  },
  {
    id: 1,
    title: 'Latest Models',
    description: 'Explore the latest models with advanced features and sleek designs.',
    image: 'https://media.istockphoto.com/id/827502902/photo/mobile-smartphone-in-electronic-store.jpg?s=612x612&w=0&k=20&c=G3jkr0uLHBR-c8Bi0405JvhL5F-sB7Ln-bYTRbqt3hw=',
    url: '/latest-models',
  },
  {
    id: 1,
    title: 'Latest Models',
    description: 'Explore the latest models with advanced features and sleek designs.',
    image: 'https://media.istockphoto.com/id/827502902/photo/mobile-smartphone-in-electronic-store.jpg?s=612x612&w=0&k=20&c=G3jkr0uLHBR-c8Bi0405JvhL5F-sB7Ln-bYTRbqt3hw=',
    url: '/latest-models',
  },
  {
    id: 1,
    title: 'Latest Models',
    description: 'Explore the latest models with advanced features and sleek designs.',
    image: 'https://media.istockphoto.com/id/827502902/photo/mobile-smartphone-in-electronic-store.jpg?s=612x612&w=0&k=20&c=G3jkr0uLHBR-c8Bi0405JvhL5F-sB7Ln-bYTRbqt3hw=',
    url: '/latest-models',
  },
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigateToPage = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="mb-5">
          <Col>
            <h1>Welcome to Sandalu's Store 😊</h1>
            <p>Your one-stop shop for the latest mobile phones.</p>
          </Col>
        </Row>
        <Row>
          {cardData.map(({ id, title, description, image, url }) => (
            <Col md={4} key={id}>
              <Card className='mb-4 shadow-sm' >
                <Card.Img variant="top" src={image} alt={title} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button variant="primary" onClick={() => navigateToPage(url)}>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
   
     <Accordion defaultActiveKey="0" className='mt-5'>
     <Accordion.Item eventKey="0">
       <Accordion.Header>Accordion Item #1</Accordion.Header>
       <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      
       </Accordion.Body>
     </Accordion.Item>
     <Accordion.Item eventKey="1">
       <Accordion.Header>Accordion Item #2</Accordion.Header>
       <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum.
       </Accordion.Body>
     </Accordion.Item>
   </Accordion>
   <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
     
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
   
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />

      </Carousel.Item>
    </Carousel>
   </Container>

   </>

  );
};

export default HomePage;
