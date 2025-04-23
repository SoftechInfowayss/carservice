import React, { useEffect, useState, } from 'react';
import { Container, Row, Col, Card, Table, Button, Modal, Form, Badge,Toast } from 'react-bootstrap';
import axios from 'axios';
import './UserDashboard.css';
import { FaUserEdit, FaMoneyCheckAlt, FaCalendarAlt, FaCar, FaUserCircle, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
   const navigate = useNavigate(); 
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem('userEmail');
      if (!email) {
        console.error('No email found in localStorage');
        return;
      }

      try {
        const userResponse = await axios.get(`https://carbackend-1-rul2.onrender.com/getuser?email=${email}`);
        const bookingsResponse = await axios.get(`https://carbackend-1-rul2.onrender.com/getbooking?email=${email}`);

        setUserData(userResponse.data);
        setEditForm({
          id:userResponse.data._id,
          name: userResponse.data.name,
          email: userResponse.data.email,
          mobno: userResponse.data.mobno,
          age: userResponse.data.age,
          password:userResponse.data.password
        });
        setBookings(bookingsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => setShowModal(true);
  const handleSaveChanges = async () => {
    try {
      console.log(editForm);
      const response = await axios.post('https://carbackend-1-rul2.onrender.com/updateuser', editForm);
      if (response.status === 200) {
        setUserData(editForm);
        setShowModal(false);
        setToastMessage(response.data.message || 'Profile updated successfully!');
        setShowToast(true);
      } else {
        setToastMessage('Error updating profile. Please try again.');
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setShowModal(false);
      setToastMessage('An error occurred while updating the profile.');
      setShowToast(true);
    }
  };
  
  return (
    <Container className="user-dashboard">
      {/* Personalized Greeting Section */}
      <Row className="mb-4">
        <Col>
        <motion.div
  className="greeting-card"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <Card className="text-center p-5 shadow-lg border-0 rounded-3" style={{ background: 'linear-gradient(135deg, #004e92, #000428)' }}>
    <div className="greeting-icon-container mx-auto mb-4">
      <FaUserCircle className="greeting-icon" />
    </div>
    <h2 className="text-light mb-3" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
      {getTimeGreeting()}, {userData.name || "User"}!
    </h2>
    <p className="text-light" style={{ fontSize: '1.1rem', fontWeight: '400' }}>
      Welcome back to your dashboard. Here's a quick overview of your account.
    </p>
  </Card>
</motion.div>


        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="profile-card text-center mb-4">
              <Card.Body>
                <FaUserCircle size={60} className="text-primary mb-3" />
                <h3 className="mb-3">My Profile</h3>
                <h4 className="mb-3 text-primary">{userData.name || "User"}</h4>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Mobile:</strong> {userData.mobno}</p>
                <p><strong>Age:</strong> {userData.age}</p>
                <Button variant="primary" onClick={handleEdit} className="mt-3">
                  <FaUserEdit /> Edit Profile
                </Button>
              </Card.Body>
            </Card>
          </motion.div>

          <Card className="mb-4 quick-actions">
            <Card.Body>
              <h5 className="text-center mb-4">Quick Actions</h5>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="success" className="w-100 mb-3"  onClick={() => navigate('/booking')}>
                  <FaMoneyCheckAlt className="me-2" /> Book a New Service
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="info" className="w-100 mb-3 text-light"  onClick={() => navigate('/Service')}>
                  <FaCalendarAlt className="me-2" /> View Service Packages
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="warning" className="w-100 text-light"  onClick={() => navigate('/contact')}>
                  <FaPhone className="me-2" /> Contact Us
                </Button>
              </motion.div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="mb-4">
            <Card.Header><h4>My Bookings</h4></Card.Header>
            <Card.Body>
              <Table hover responsive className="bookings-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Car Brand</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length ? bookings.map((booking, index) => (
                    <tr key={booking._id}>
                      <td>{index + 1}</td>
                      <td>{booking.carbrand}</td>
                      <td>{booking.servicetype}</td>
                      <td>{new Date(booking.timing).toLocaleDateString()}</td>
                      <td><Badge bg={booking.status === 'Completed' ? 'success' : 'primary'}>{booking.status}</Badge></td>
                    </tr>
                  )) : <tr><td colSpan="6">No bookings found</td></tr>}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                value={editForm.mobno}
                onChange={(e) => setEditForm({ ...editForm, mobno: e.target.value })}
                placeholder="Enter your mobile number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={editForm.age}
                onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
                placeholder="Enter your age"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="number"
                value={editForm.password}
                onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                placeholder="Enter your password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
  onClose={() => setShowToast(false)}
  show={showToast}
  delay={3000}
  autohide
  style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1050,
  }}
>
  <Toast.Header>
    <strong className="me-auto">Notification</strong>
  </Toast.Header>
  <Toast.Body>{toastMessage}</Toast.Body>
</Toast>

    </Container>
  );
};

export default UserDashboard;
