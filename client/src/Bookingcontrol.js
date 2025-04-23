import React, { useState, useEffect } from 'react';
import { Table, Spinner, Container, Card, Button, Badge, Modal, Form } from "react-bootstrap";
import axios from 'axios';
import { FaCar, FaClock, FaStickyNote, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai';

const BookingControl = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://carbackend-1-rul2.onrender.com/allbooking")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleAddUser = () => {
    axios
      .post('/api/users', { name, email })
      .then(() => {
        setUsers([...users, { name, email }]);
        setShow(false);
      })
      .catch((error) => console.error('Error adding user:', error));
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <Container className="py-4">
      <Card
        className="shadow-lg p-4 border-0"
        style={{
          background: "linear-gradient(135deg, #000428, #004e92)",
          color: "#fff",
          borderRadius: "15px",
        }}
      >
        <h2 className="text-center mb-4">Booking Details</h2>
        <div className="d-flex justify-content-between align-items-center mb-3">
         
        </div>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status" style={{ color: "#fff" }} />
            <span className="ms-2">Loading...</span>
          </div>
        ) : (
          <Table bordered hover responsive className="text-center table-light rounded">
            <thead className="table-dark">
              <tr>
                <th>
                  <FaUserAlt /> Name
                </th>
                <th>
                  <FaEnvelope /> E-mail
                </th>
                <th>
                  <FaCar /> Car Brand
                </th>
                <th>
                  Car Type
                </th>
                <th>Service Type</th>
                <th>
                  <FaClock /> Timing Slot
                </th>
                <th>
                  <FaStickyNote /> Notes
                </th>
                
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Badge bg="info" className="text-dark">
                      {user.carbrand}
                    </Badge>
                  </td>
                  <td>{user.cartype}</td>
                  <td>
                    <Badge bg="primary" className="text-light">
                      {user.servicetype}
                    </Badge>
                  </td>
                  <td>{user.timing}</td>
                  <td>{user.notes}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {/* Modal for adding a booking */}
     
    </Container>
  );
};

export default BookingControl;
