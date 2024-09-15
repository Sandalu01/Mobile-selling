import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = () => {
    return (
        <Carousel>
            <Carousel.Item>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <img
            style={{ width: '500px', height: '700px' }}
            src="https://images.unsplash.com/photo-1598770546586-9d9528db4922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
        />
    </div>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <img
            style={{ width: '500px', height: '700px' }}
            src="https://images.unsplash.com/photo-1567910026630-08199077e732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXN8ZW58MHx8MHx8fDA%3D"
            alt="Third slide"
        />
    </div>

            </Carousel.Item>
            <Carousel.Item>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <img
            style={{ width: '500px', height: '700px' }}
            src="https://images.unsplash.com/photo-1560699980-9dee78d1e874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
            alt="Third slide"
        />
    </div>

            </Carousel.Item>
        </Carousel>
    );
};

export default ExampleCarouselImage;
