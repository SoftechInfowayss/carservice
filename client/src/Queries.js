import React, { useState, useEffect } from 'react';
import { Table, Spinner, Container, Card } from "react-bootstrap";
import axios from 'axios';
import { FaEnvelope, FaUserCircle, FaCommentDots } from "react-icons/fa";
import { motion } from 'framer-motion';
import './Queries.css';

const Queries = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://carbackend-1-rul2.onrender.com/allqueries")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg p-4 dashboard-card">
          <h2 className="text-center mb-4">
            <motion.span 
              whileHover={{ scale: 1.1, color: "#00d2ff" }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              Queries Dashboard
            </motion.span>
          </h2>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status" style={{ color: "#00d2ff" }} />
              <span className="ms-2">Loading...</span>
            </div>
          ) : (
            <>
              <div className="table-wrapper">
                <Table bordered hover responsive className="text-center dashboard-table">
                  <thead>
                    <tr>
                      <th>
                        <FaUserCircle className="icon" /> Name
                      </th>
                      <th>
                        <FaEnvelope className="icon" /> Email
                      </th>
                      <th>
                        <FaCommentDots className="icon" /> Message
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <motion.tr
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 100 }}
                      >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.message}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="mt-3 text-center">
                <motion.button 
                  className="btn btn-light btn-sm shadow-sm"
                  whileHover={{ scale: 1.1, backgroundColor: "#00d2ff", color: "#000" }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  Export to CSV
                </motion.button>
              </div>
            </>
          )}
        </Card>
      </motion.div>
    </Container>
  );
};

export default Queries;
