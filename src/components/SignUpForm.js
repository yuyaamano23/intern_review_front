import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SignUpForm extends Component {
  render() {
    return (
      <Form
        className="border border-secondary rounded"
        style={{ width: "600px" }}
      >
        <div className="font-weight-bold h3 mb-4" style={{ margin: "10px" }}>
          Sign Up
        </div>
        <Form.Group controlId="formBasicEmail" style={{ margin: "10px" }}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit" style={{ margin: "10px" }}>
          Submit
        </Button>
      </Form>
    );
  }
}
export default SignUpForm;
