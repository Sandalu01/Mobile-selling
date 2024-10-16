import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
        if (response.data.success) {
            // Handle successful login
            console.log('Login successful');
        } else {
            setError(response.data.message);
        }
    } catch (err) {
        setError('An error occurred. Please try again.');
    }
};

  return (  
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-4 mt-5">
            <Card.Body>
              <h2 className="mb-4 text-center">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="mt-4" >
                  Login
                </Button>
                </div>
              </Form>
              <div className="mt-3 text-center">
                <Link to="/signup">Don't have an account? Sign up</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
