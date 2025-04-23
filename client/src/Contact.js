import React from 'react';
import { Container, Row, Col, Form, Button, Card,Modal,Spinner } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './ContactUs.css';
import Footer from './Footer';
import { BsTelephoneFill, BsCheckCircleFill, BsFillCarFrontFill, BsTools } from 'react-icons/bs';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    try {
      const response = await axios.post('https://carbackend-1-rul2.onrender.com/contact', formData);
      setResponseMessage('Thank you for Contacting! Confirmation E-mail Sent!');
      setFormData({ name: '', email: '', message: '' });
      setShowModal(true); // Show success modal
    } catch (error) {
      setResponseMessage('Oops! Something went wrong. Please try again.');
      console.error(error);
      setShowModal(true); // Show error modal
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <>
 <Row className="text-center mb-5 position-relative m-0 p-0">
  <Col>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        style={{
          padding: '70px',
          background: 'linear-gradient(135deg, #000428, #004e92)',
          borderRadius: '25px',
          boxShadow: '0 12px 25px rgba(0, 0, 0, 0.2)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Yellow Highlight */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-40px',
            left: '-40px',
            width: '120px',
            height: '120px',
            background: 'rgba(255, 215, 0, 0.2)',
            borderRadius: '50%',
            zIndex: 0,
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        ></motion.div>
        
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'rgba(255, 215, 0, 0.2)',
            borderRadius: '50%',
            zIndex: 0,
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [360, 0] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        ></motion.div>

        <motion.h1
          className="display-4 mb-4"
          style={{
            fontWeight: '700',
            letterSpacing: '1.2px',
            fontFamily: "'Poppins', sans-serif",
            position: 'relative',
            zIndex: 1,
          }}
          whileHover={{ scale: 1.05, color: '#FFD700' }}
        >
          <span style={{ color: '#FFD700' }}>Get in Touch</span> with Us
        </motion.h1>

        <p
          className="lead"
          style={{
            fontSize: '1.2rem',
            fontFamily: "'Roboto', sans-serif",
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          We're always here to assist you with any queries or support you need. Feel free to reach out and experience exceptional service.
        </p>

        {/* Animated Yellow Underline */}
        <motion.div
          className="position-absolute"
          style={{
            width: '120px',
            height: '6px',
            backgroundColor: '#FFD700',
            left: '50%',
            bottom: '-20px',
            transform: 'translateX(-50%)',
            borderRadius: '50px',
            zIndex: 1,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        {/* Call-to-Action Button */}
        {/* <motion.a
          href="#contact-form"
          style={{
            display: 'inline-block',
            padding: '12px 40px',
            marginTop: '30px',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, #FFD700, #FFC107)',
            color: '#000428',
            fontWeight: '600',
            fontFamily: "'Poppins', sans-serif",
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            zIndex: 1,
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.5)',
          }}
        >
          Contact Us Now
        </motion.a> */}
      </div>
    </motion.div>
  </Col>
</Row>


      <Container className="py-5">
    
      {/* Contact Form and Map with Enhanced Layout */}
<Row className="gy-5 align-items-center">
<Col lg={6}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded shadow-lg"
              style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e0e0e0',
                borderRadius: '15px',
                transition: 'box-shadow 0.3s',
              }}
            >
              <h2 className="mb-4 text-primary" style={{ fontWeight: 'bold' }}>Send Us a Message</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label style={{ fontWeight: '500' }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded"
                    style={{ border: '2px solid #e0e0e0', boxShadow: 'none' }}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label style={{ fontWeight: '500' }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded"
                    style={{ border: '2px solid #e0e0e0', boxShadow: 'none' }}
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label style={{ fontWeight: '500' }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 rounded"
                    style={{ border: '2px solid #e0e0e0', boxShadow: 'none' }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 p-3"
                  style={{
                    fontWeight: 'bold',
                    letterSpacing: '0.5px',
                    borderRadius: '8px',
                  }}
                  disabled={loading} // Disable button when loading
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Form>
              {responseMessage && <p className="mt-3 text-center">{responseMessage}</p>}
            </motion.div>
          </Col>
  <Col lg={6}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <h2 className="mb-4 text-primary" style={{ fontWeight: 'bold' }}>
        Our Location
      </h2>
      <div
        className="embed-responsive embed-responsive-16by9 rounded shadow-lg"
        style={{ overflow: 'hidden', borderRadius: '15px' }}
      >
        <iframe
          title="Google Map"
          className="embed-responsive-item rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092954!2d144.95373631531696!3d-37.81627997975123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0c2f5f73%3A0x5045675218ceed1!2sCar%20Service!5e0!3m2!1sen!2sau!4v1602048257647!5m2!1sen!2sau"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          style={{ border: '0', filter: 'grayscale(20%)' }}
        ></iframe>
      </div>
    </motion.div>
  </Col>
</Row>

        {/* Social Media Links */}
        <Row className="my-5 text-center">
  <Col>
    <h2 className="text-primary mb-4">Connect with Us</h2>
    <Row className="social-media-icons justify-content-center">
        <Col xs={2} md={1}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="social-icon" />
            </a>
          </motion.div>
        </Col>
        <Col xs={2} md={1}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" className="social-icon" />
            </a>
          </motion.div>
        </Col>
        <Col xs={2} md={1}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="social-icon" />
            </a>
          </motion.div>
        </Col>
        <Col xs={2} md={1}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="social-icon" />
            </a>
          </motion.div>
        </Col>
        <Col xs={2} md={1}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="YouTube" className="social-icon" />
            </a>
          </motion.div>
        </Col>
      </Row>
  </Col>
</Row>

      
        {/* FAQ Section */}
        <Row className="my-5">
  <Col>
    <h2 className="text-center mb-4" style={{ color: '#004e92' }}>Frequently Asked Questions</h2>
    <Accordion className="faq-accordion">
      <Accordion.Item eventKey="0" className="custom-accordion">
        <Accordion.Header>What services do you offer?</Accordion.Header>
        <Accordion.Body>
          We offer routine maintenance, emergency repairs, and specialized services by certified technicians. Check our full service list on the website!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="custom-accordion">
        <Accordion.Header>How can I book an appointment?</Accordion.Header>
        <Accordion.Body>
          You can book an appointment online through our website or give us a call. We recommend booking ahead for routine services.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="custom-accordion">
        <Accordion.Header>What are your working hours?</Accordion.Header>
        <Accordion.Body>
          We are open Monday to Saturday from 9:00 AM to 6:00 PM, with emergency services available 24/7.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Col>
</Row>


<div id="booking-timeline" className="py-5" style={{ background: 'linear-gradient(135deg, #e3f2fd, #ffffff)' }}>
  <Container>
    <Row className="text-center mb-5">
      <Col>
        <h2 className="text-dark" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Service Booking Timeline</h2>
        <p className="lead text-muted">A clear, step-by-step process from booking to service completion</p>
      </Col>
    </Row>

    <Row className="g-4 justify-content-center">
      {/* Step 1: Contact Us */}
      <Col md={3}>
        <motion.div
          whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
          transition={{ duration: 0.3 }}
          className="timeline-step text-center p-4 rounded"
          style={{ minHeight: '320px', backgroundColor: '#ffffff', border: '1px solid #dee2e6', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="mb-4 p-3 bg-primary rounded-circle d-inline-block" style={{ width: '80px', height: '80px' }}>
            <BsTelephoneFill className="text-white" style={{ fontSize: '2.5rem' }} />
          </div>
          <h4 className="text-dark">Step 1: Contact Us</h4>
          <p className="text-muted">Reach out to us via the form, phone, or email to book a service.</p>
        </motion.div>
      </Col>

      {/* Step 2: Confirmation */}
      <Col md={3}>
        <motion.div
          whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
          transition={{ duration: 0.3 }}
          className="timeline-step text-center p-4 rounded"
          style={{ minHeight: '320px', backgroundColor: '#ffffff', border: '1px solid #dee2e6', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="mb-4 p-3 bg-success rounded-circle d-inline-block" style={{ width: '80px', height: '80px' }}>
            <BsCheckCircleFill className="text-white" style={{ fontSize: '2.5rem' }} />
          </div>
          <h4 className="text-dark">Step 2: Confirmation</h4>
          <p className="text-muted">Our team will confirm your booking and provide the necessary details.</p>
        </motion.div>
      </Col>

      {/* Step 3: Drop-off or Pickup */}
      <Col md={3}>
        <motion.div
          whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
          transition={{ duration: 0.3 }}
          className="timeline-step text-center p-4 rounded"
          style={{ minHeight: '320px', backgroundColor: '#ffffff', border: '1px solid #dee2e6', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="mb-4 p-3 bg-info rounded-circle d-inline-block" style={{ width: '80px', height: '80px' }}>
            <BsFillCarFrontFill className="text-white" style={{ fontSize: '2.5rem' }} />
          </div>
          <h4 className="text-dark">Step 3: Drop-off or Pickup</h4>
          <p className="text-muted">Bring your vehicle to our center or schedule a pickup at your location.</p>
        </motion.div>
      </Col>

      {/* Step 4: Service Completion */}
      <Col md={3}>
        <motion.div
          whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
          transition={{ duration: 0.3 }}
          className="timeline-step text-center p-4 rounded"
          style={{ minHeight: '320px', backgroundColor: '#ffffff', border: '1px solid #dee2e6', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="mb-4 p-3 bg-warning rounded-circle d-inline-block" style={{ width: '80px', height: '80px' }}>
            <BsTools className="text-white" style={{ fontSize: '2.5rem' }} />
          </div>
          <h4 className="text-dark">Step 4: Service Completion</h4>
          <p className="text-muted">Our expert technicians complete the service with quality assurance.</p>
        </motion.div>
      </Col>
    </Row>

    <Row className="text-center mt-5">
      <Col>
        <p className="text-muted">Once your service is completed, we ensure everything is perfect for pickup or delivery back to you.</p>
        <Button variant="primary" size="lg" className="mt-3">Book Your Service Now</Button>
      </Col>
    </Row>
  </Container>
    <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{responseMessage.startsWith('Thank you') ? 'Success' : 'Error'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{responseMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
</div>


      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
