import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Modal, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCar, FaWrench, FaClock, FaNotesMedical, FaUser, FaEnvelope } from 'react-icons/fa';
import moment from 'moment';
import './Booking.css';
import Footer from './Footer';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carBrand: '',
    carType: '',
    serviceType: '',
    timingSlot: '',
    additionalNotes: '',
  });

  const [carBrands, setCarBrands] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loader

  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const response = await axios.get('https://carbackend-1-rul2.onrender.com/getcar');
        setCarBrands(response.data);
      } catch (error) {
        console.error('Error fetching car brands:', error);
      }
    };

    fetchCarBrands();
  }, []);

  useEffect(() => {
    const fetchCarTypes = async () => {
      try {
        const response = await axios.get('https://carbackend-1-rul2.onrender.com/gettype');
        setCarTypes(response.data);
      } catch (error) {
        console.error('Error fetching car types:', error);
      }
    };

    fetchCarTypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const timing = moment(formData.timingSlot).format('hh:mm A');

    const bookingData = {
      name: formData.name,
      email: formData.email,
      carbrand: formData.carBrand,
      cartype: formData.carType,
      servicetype: formData.serviceType,
      timing: timing,
      notes: formData.additionalNotes,
    };

    setLoading(true); // Show loader
    try {
      const response = await axios.post('https://carbackend-1-rul2.onrender.com/booking', bookingData);
      setResponseMessage('Booking created successfully!');
      formData.additionalNotes=""
       formData.name=""
        formData.email=""
         formData.carBrand=""
          formData.cartype=""
           formData.timingSlot=""
            formData.serviceType=""
    } catch (error) {
      setResponseMessage('Failed to create booking. Please try again.');
    } finally {
      setLoading(false); // Hide loader
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="booking-page" style={{ background: '#f4f8fc', minHeight: '100vh', padding: '50px 0' }}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={8} className="mb-5">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <Card.Header
                    style={{ background: 'linear-gradient(135deg, #1e3c72, #2a5298)', color: '#fff' }}
                    className="text-center"
                  >
                    <h3>Book Your Service Now</h3>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>
                              <FaUser className="me-2" /> Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>
                              <FaEnvelope className="me-2" /> Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formCarBrand" className="mb-3">
                            <Form.Label>
                              <FaCar className="me-2" /> Car Brand
                            </Form.Label>
                            <Form.Control
                              as="select"
                              name="carBrand"
                              value={formData.carBrand}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select a brand</option>
                              {carBrands.map((brand) => (
                                <option key={brand._id} value={brand.name}>
                                  {brand.name}
                                </option>
                              ))}
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formCarType" className="mb-3">
                            <Form.Label>
                              <FaCar className="me-2" /> Car Type
                            </Form.Label>
                            <Form.Control
                              as="select"
                              name="carType"
                              value={formData.carType}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select a type</option>
                              {carTypes.map((type) => (
                                <option key={type._id} value={type.typename}>
                                  {type.typename}
                                </option>
                              ))}
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group controlId="formServiceType" className="mb-3">
                        <Form.Label>
                          <FaWrench className="me-2" /> Service Type
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select service</option>
                          <option value="Oil Change">Oil Change</option>
                          <option value="Tire Rotation">Tire Rotation</option>
                          <option value="Brake Inspection">Brake Inspection</option>
                          <option value="Engine Tune-up">Engine Tune-up</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formTimingSlot" className="mb-3">
                        <Form.Label>
                          <FaClock className="me-2" /> Timing Slot
                        </Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="timingSlot"
                          value={formData.timingSlot}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="formAdditionalNotes" className="mb-3">
                        <Form.Label>
                          <FaNotesMedical className="me-2" /> Additional Notes
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          placeholder="Enter any additional notes"
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        className="w-100 mt-3"
                        style={{
                          background: 'linear-gradient(135deg, #2a5298, #4facfe)',
                          border: 'none',
                          borderRadius: '30px',
                          padding: '10px',
                          color: '#fff',
                        }}
                      >
                        {loading ? <Spinner animation="border" size="sm" /> : 'Book Service'}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col lg={4} className="text-center">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Card className="shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
      <motion.img
        src="https://png.pngtree.com/thumb_back/fw800/background/20240729/pngtree-the-procedure-of-painting-a-car-in-the-service-center-image_15933744.jpg"
        alt="Service"
        className="card-img-top"
        whileHover={{ scale: 1.05 }}
        style={{ transition: 'transform 0.3s ease' }}
      />
      <Card.Body>
        <h5 style={{ color: '#1e3c72', fontWeight: 'bold' }}>Expert Care for Your Car</h5>
        <p>
          Experience unmatched car service with modern tools and skilled professionals. Book a service that cares for your car's needs.
        </p>
        <ul className="list-unstyled text-start">
          <li><FaWrench className="me-2" /> Full Engine Check-Up</li>
          <li><FaCar className="me-2" /> Tire Rotation</li>
          <li><FaClock className="me-2" /> Timely Oil Changes</li>
        </ul>
        <Button
          variant="primary"
          className="mt-3"
          style={{
            background: 'linear-gradient(135deg, #2a5298, #4facfe)',
            border: 'none',
            borderRadius: '20px',
            padding: '10px 20px',
          }}
        >
          Explore More 
        </Button>
      </Card.Body>
      <Card.Footer className=" text-light">
        ⭐⭐⭐⭐⭐ Trusted by Thousands
      </Card.Footer>
    </Card>
  </motion.div>
</Col>

          </Row>
        </Container>
        <Footer />
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{responseMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Booking;
