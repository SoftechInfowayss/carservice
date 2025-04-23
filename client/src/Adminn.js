import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { FaUserShield, FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Adminn.css";
import Footer from "./Footer";

const AdminLogin1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "taruna" && password === "123456") {
      window.location.href = "/admin"; // Redirect to admin panel
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Container
        fluid
        className="admin-login-page d-flex align-items-center justify-content-center"
      >
        <Row className="w-100">
          <Col md={5} className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="login-card shadow-lg">
                <Card.Header className="text-center header-gradient">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <FaUserShield className="icon-admin mb-3" />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-light"
                  >
                    Welcome Back, Admin!
                  </motion.h2>
                  <p className="text-light small">
                    Secure your portal with trusted access
                  </p>
                </Card.Header>
                <Card.Body>
                  <h4 className="text-center text-gradient mb-4">Admin Login</h4>

                  {error && (
                    <Alert variant="danger" className="text-center">
                      {error}
                    </Alert>
                  )}

                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-4" controlId="formUsername">
                      <Form.Label>
                        <FaUser className="me-2 text-primary" />
                        Username
                      </Form.Label>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="form-input"
                        />
                      </motion.div>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPassword">
                      <Form.Label>
                        <FaLock className="me-2 text-primary" />
                        Password
                      </Form.Label>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-input"
                        />
                      </motion.div>
                    </Form.Group>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="d-grid gap-2"
                    >
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 btn-login"
                      >
                        Login
                      </Button>
                    </motion.div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdminLogin1;
