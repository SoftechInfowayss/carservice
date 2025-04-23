import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaCar, FaUser, FaEnvelope, FaClock, FaStickyNote, FaStar, FaQuoteLeft, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
// import CarFooter from "./Carfooter";

const CarBookingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Booking submitted successfully!");
    }, 2000);
  };

  // Inline styles
  const styles = {
    bookingPage: {
      background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      minHeight: "100vh",
      padding: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    bookingContainer: {
      maxWidth: "1200px",
    },
    bookingCard: {
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      padding: "2rem",
    },
    heroSection: {
      background: "linear-gradient(135deg, #007bff, #0056b3)",
      borderRadius: "15px",
      padding: "2rem",
      color: "white",
      textAlign: "center",
      marginBottom: "2rem",
    },
    heroTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    heroSubtitle: {
      fontSize: "1.2rem",
      opacity: 0.9,
    },
    serviceCard: {
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    serviceCardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    testimonialCard: {
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      textAlign: "center",
    },
    formControl: {
      borderRadius: "10px",
      border: "1px solid #ddd",
      padding: "10px",
      transition: "all 0.3s ease",
    },
    formControlFocus: {
      borderColor: "#007bff",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
    },
    submitButton: {
      background: "linear-gradient(135deg, #007bff, #0056b3)",
      border: "none",
      borderRadius: "10px",
      padding: "10px",
      fontSize: "1.1rem",
      transition: "all 0.3s ease",
      width: "100%",
      marginTop: "1rem",
    },
    submitButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(0, 123, 255, 0.4)",
    },
    submitButtonDisabled: {
      background: "#ccc",
      cursor: "not-allowed",
    },
    spinner: {
      verticalAlign: "middle",
    },
  };

  return (
    <motion.div 
      style={styles.bookingPage}
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Container style={styles.bookingContainer}>
        {/* Hero Section */}
        <motion.div 
          style={styles.heroSection}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 style={styles.heroTitle}>Book Your Car Service Today</h2>
          <p style={styles.heroSubtitle}>
            Fast, reliable, and professional car services tailored to your needs.
          </p>
        </motion.div>

        {/* Service Cards */}
        <Row className="mb-5 g-4">
          {[
            { title: "Basic Wash", icon: <FaCar size={30} />, description: "Exterior wash and dry." },
            { title: "Premium Wash", icon: <FaCar size={30} />, description: "Exterior wash, wax, and interior cleaning." },
            { title: "Full Detailing", icon: <FaCar size={30} />, description: "Complete interior and exterior detailing." },
          ].map((service, index) => (
            <Col md={4} key={index}>
              <motion.div
                style={styles.serviceCard}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-primary mb-3">{service.icon}</div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Booking Form */}
        <motion.div 
          style={styles.bookingCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-center mb-4 text-primary">Car Booking Form</h2>
          <Form onSubmit={handleSubmit}>
            {/* Personal Info */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <h4 className="mb-3">Personal Information</h4>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label><FaUser className="me-2" /> Full Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter your name" 
                      required 
                      style={styles.formControl}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label><FaEnvelope className="me-2" /> Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      style={styles.formControl}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </motion.div>

            {/* Car Details */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <h4 className="mb-3">Car Details</h4>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label><FaCar className="me-2" /> Car Brand</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter car brand" 
                      required 
                      style={styles.formControl}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Car Type</Form.Label>
                    <Form.Select 
                      required 
                      style={styles.formControl}
                    >
                      <option value="">Select Car Type</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="convertible">Convertible</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </motion.div>

            {/* Service Details */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
              <h4 className="mb-3">Service Details</h4>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Select 
                      required 
                      style={styles.formControl}
                    >
                      <option value="">Select Service Type</option>
                      <option value="basic">Basic Wash</option>
                      <option value="premium">Premium Wash</option>
                      <option value="full">Full Detailing</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label><FaClock className="me-2" /> Timing Slot</Form.Label>
                    <Form.Control 
                      type="time" 
                      required 
                      style={styles.formControl}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </motion.div>

            {/* Additional Notes */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <h4 className="mb-3">Additional Notes</h4>
              <Form.Group className="mb-3">
                <Form.Label><FaStickyNote className="me-2" /> Notes</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter any additional requests" 
                  style={styles.formControl}
                />
              </Form.Group>
            </motion.div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="primary" 
                type="submit" 
                style={{
                  ...styles.submitButton,
                  ...(isSubmitting ? styles.submitButtonDisabled : {}),
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>
                    <span 
                      className="spinner-border spinner-border-sm" 
                      role="status" 
                      aria-hidden="true" 
                      style={styles.spinner}
                    ></span>
                    Submitting...
                  </span>
                ) : (
                  "Submit Booking"
                )}
              </Button>
            </motion.div>
          </Form>
        </motion.div>
      </Container>
    </motion.div>
  );
};

const TarunaBooking = () => {
  return (
    <div>
      <CarBookingPage />
      {/* <CarFooter /> */}
    </div>
  );
};

export default TarunaBooking;