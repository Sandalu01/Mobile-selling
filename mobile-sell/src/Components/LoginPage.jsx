// src/components/LoginPage.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const LoginPage = () => {
  return (

    <div className='login'>
       <Container className="login-container">
        <div className='login-fo'>
        <h2 className="login-title">Login</h2>
      <Form className="login-form">
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="login-label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="login-input" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="login-input" />
        </Form.Group>
        <Button variant="primary" type="submit" className="login-button">
          Submit
        </Button>
  
      </Form>
      
        </div>
    </Container>

    </div>
   
  );
};

export default LoginPage;
