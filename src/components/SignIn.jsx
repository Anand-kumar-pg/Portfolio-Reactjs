
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function SignIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your full name";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.password) newErrors.password = "Please enter your password";
    
    console.log("Name: " + newErrors.name);
    console.log("Email: " + newErrors.email);
    console.log("Password: " + newErrors.password);

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      alert("CONGRATULATION");
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  return (
    <>
      <Container style={{ marginTop: '8%' }}>
        <div className="container">
          <Form onSubmit={handleSubmit}>
            <h1 className="Mostudio">MOSTUDIO</h1>
            <hr />
            <p className="large-text">Create Your New Mostudio Account</p>
            <div className="mb-3">
              <Form.Label htmlFor="name">* Full name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="email">* Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">* Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <Button type="submit" className="btn-secondary">Create Account</Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default SignIn;
