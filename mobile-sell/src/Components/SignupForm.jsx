// src/components/SignupPage.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SignupPage = () => {
  return (

    <div className='signup'>
      <Container>
      <div className="signup-form">
      <h2 className='signup-title'>Sign Up</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="E
          nter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      </div>
    </Container>

    </div>
    
  );
};

export default SignupPage;
