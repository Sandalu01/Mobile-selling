import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                     style={{ width: '400px', height: '400px' }}
                    src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '400px', height: '400px' }}
                    src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '400px', height: '400px' }}
                    src="https://via.placeholder.com/800x400?text=Third+Slide"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default ExampleCarouselImage;
