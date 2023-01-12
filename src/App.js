import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>New Referral</h4>
      <Form>
      <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your first name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your last name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control type="date" placeholder="Enter your date of birth" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact Language:</Form.Label>
          <Form.Control type="text" placeholder="Enter your language" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="number" placeholder="Enter your phone" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Notes:</Form.Label>
          <Form.Control type="text" placeholder="Enter your notes/reason" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Click here to submit form
        </Button>
      </Form>
    </div>
  );
}

export default App;
