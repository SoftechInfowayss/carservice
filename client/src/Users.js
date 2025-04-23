import React, { useState, useEffect } from "react";
import { Table, Spinner, Container, Card ,Button} from "react-bootstrap";
import { FaUser, FaPhone, FaEnvelope, FaLock, FaBirthdayCake,FaTrash } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("https://carbackend-1-rul2.onrender.com/allusers")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  };

  const deleteUser = (email) => {
    if (window.confirm(`Are you sure you want to delete the user with email: ${email}?`)) {
      axios
        .post("https://carbackend-1-rul2.onrender.com/delete", { email }) // Sending POST request with email
        .then((response) => {
          alert(response.data.message || "User deleted successfully");
          fetchUsers(); // Refresh the list after deletion
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          alert("Failed to delete user. Please try again.");
        });
    }
  };

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Card className="shadow-lg p-4" style={{ background: "linear-gradient(135deg, #000428, #004e92)", color: "#fff", borderRadius: "15px" }}>
          <h2 className="text-center mb-4" style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            User Details
          </h2>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status" style={{ color: "#66b2ff", fontSize: "2rem" }} />
              <span className="ms-2" style={{ fontSize: "1.2rem" }}>Loading...</span>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Table bordered hover responsive className="text-center" style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
                <thead className="table-dark">
                  <tr>
                    <th>
                      <FaUser className="me-2 text-primary" /> Name
                    </th>
                    <th>
                      <FaPhone className="me-2 text-primary" /> Mobile Number
                    </th>
                    <th>
                      <FaEnvelope className="me-2 text-primary" /> Email
                    </th>
                    <th>
                      <FaLock className="me-2 text-primary" /> Password
                    </th>
                    <th>
                      <FaBirthdayCake className="me-2 text-primary" /> Age
                    </th>
                    <th>
                      <FaTrash className="me-2 icon" /> Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <motion.tr
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      style={{ cursor: "pointer" }}
                    >
                      <td>{user.name}</td>
                      <td>{user.mobno}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.age}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => deleteUser(user.email)} // Pass email to deleteUser
                          className="delete-button"
                        >
                          Delete
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </Table>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </Container>
  );
};

export default Users;
