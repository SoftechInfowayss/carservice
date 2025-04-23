import React, { useState } from 'react';
import { Container, Form, Button, Col, Row, Card,Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaCalendarAlt, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import './SignUpPage.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const SignUpPage = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    age: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    // Adjust the data key before sending it to the backend
    const adjustedFormData = {
      ...formData,
      mobno: formData.mobile,  // Map `mobile` to `mobno`
    };
    delete adjustedFormData.mobile;  // Remove `mobile` key as it's unnecessary

    const response = await axios.post('https://carbackend-1-rul2.onrender.com/signup', adjustedFormData);
    if (response.status === 201) {
      setResponseMessage(response.data.message);
      setShowModal(true);  // Show success modal
    formData.age=""
    formData.email=""
    formData.mobile=""
    formData.name=""
    formData.password=""
      //alert('User registered successfully!');
    }
  } catch (error) {
   // alert('Error signing up user');
    setResponseMessage('Error signing up user');
    setShowModal(true);  // Show error modal
    console.error(error);
  }
  };
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <Container fluid className="sign-up-page">
        <Row className="split-section">
          <Col md={6} className="hero-side d-flex align-items-center justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hero-content"
            >
              <h1 className="hero-title">Join the Premium Car Service Community</h1>
              <p className="hero-subtitle">
                Unlock exclusive access to priority bookings, customized service plans, and more.
              </p>
            </motion.div>
          </Col>

          <Col md={6} className="form-side d-flex align-items-center justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="sign-up-card-container"
            >
              <Card className="sign-up-card p-4 shadow-lg">
                <h2 className="text-center mb-4 sign-up-heading">Create Your Account</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <div className="input-icon">
                      <FaUser className="input-icon-symbol" />
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="mobile">
                    <div className="input-icon">
                      <FaPhone className="input-icon-symbol" />
                      <Form.Control
                        type="text"
                        placeholder="Enter your mobile number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <div className="input-icon">
                      <FaEnvelope className="input-icon-symbol" />
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <div className="input-icon">
                      <FaLock className="input-icon-symbol" />
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="age">
                    <div className="input-icon">
                      <FaCalendarAlt className="input-icon-symbol" />
                      <Form.Control
                        type="number"
                        placeholder="Enter your age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Group>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="d-grid gap-2"
                  >
                    <Button type="submit" className="btn-primary">
                      Sign Up
                    </Button>
                  </motion.div>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
        <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{responseMessage.includes('successfully') ? 'Success' : 'Error'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{responseMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpPage;
