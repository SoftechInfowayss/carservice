import React, { useState } from 'react'; // Import useState to manage form state
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Container, Row, Col, Card, Form, Button ,Modal} from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import Axios for API calls
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Custom CSS for enhanced styles
import Footer from './Footer';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
const Login = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [loading, setLoading] = useState(false); // State for loading state
  const [responseMessage, setResponseMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post('https://carbackend-1-rul2.onrender.com/login', { email, password }); // Make the API call
      // Handle successful login (e.g., store token, redirect, etc.)
      console.log(response.data); // Log the response (you can handle it as needed)
      localStorage.setItem('userEmail', email);
      navigate('/User'); 
      
      // Optionally, store token in localStorage or state management solution
      // localStorage.setItem('token', response.data.token);
    } catch (error) {
     // alert('Invalid email or password');
      setResponseMessage('Invalid email or password!');
      setShowModal(true);  // Show success modal // Show alert for invalid login
      console.error('Login error:', error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <div className="login-background">
        <video autoPlay muted loop className="background-video">
          <source src="/images/Video.mp4" type="video/mp4" />
        </video>

        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={4}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="shadow-lg rounded login-card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                  <Card.Body>
                    <h2 className="text-center mb-4 text-light" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Login</h2>
                    <Form onSubmit={handleLogin}> {/* Handle form submission */}
                      <Form.Group controlId="formEmail">
                        <Form.Label className="text-light">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          className="form-input"
                          required
                          value={email} // Bind value to state
                          onChange={(e) => setEmail(e.target.value)} // Update state on change
                          style={{ borderRadius: '10px', border: '1px solid #007bff', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                        />
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          className="form-input"
                          required
                          value={password} // Bind value to state
                          onChange={(e) => setPassword(e.target.value)} // Update state on change
                          style={{ borderRadius: '10px', border: '1px solid #007bff', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100 mt-4" style={{ borderRadius: '10px', fontSize: '1.1rem' }} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'} {/* Conditional loading text */}
                      </Button>
                    </Form>
                    <div className="text-center mt-3">
                      <a href="/forgot-password" className="text-light" style={{ textDecoration: 'underline' }}>Forgot your password?</a>
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-light">
                        Don't have an account? <a href="/signup" className="text-light" style={{ textDecoration: 'underline' }}>Sign Up</a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
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
      </div>

      <Footer />
    </>
  );
};

export default Login;
