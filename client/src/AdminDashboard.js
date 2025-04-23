import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaUsers, FaClipboardList, FaQuestionCircle,FaQuestion ,FaInfoCircle,FaLightbulb} from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [bookingsCount, setBookingsCount] = useState(0);
  const [queriesCount, setQueriesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        const [usersResponse, bookingsResponse, queriesResponse] = await Promise.all([
          axios.get("https://carbackend-1-rul2.onrender.com/allusers"),
          axios.get("https://carbackend-1-rul2.onrender.com/allbooking"),
          axios.get("https://carbackend-1-rul2.onrender.com/allqueries"),
        ]);

        setUsersCount(usersResponse.data.length);
        setBookingsCount(bookingsResponse.data.length);
        setQueriesCount(queriesResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip" className="custom-tooltip">
      {message}
    </Tooltip>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  return (
    <Container fluid className="admin-dashboard-page py-5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="mb-4"
      >
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <p className="dashboard-subtitle">
          Monitor the platform's performance with real-time metrics
        </p>
      </motion.div>

      <motion.div
        className="dashboard-cards"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row>
          <Col md={4}>
            <motion.div variants={cardVariants}>
              <Card className="stat-card shadow-lg">
                <Card.Body>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip("Total number of users registered")}
                  >
                    <FaUsers className="stat-icon text-info" />
                  </OverlayTrigger>
                  <h5 className="stat-title">Total Users</h5>
                  <motion.h3
                    className="stat-number"
                    whileHover={{ scale: 1.2, color: "#ffffff" }}
                  >
                    {usersCount}
                  </motion.h3>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div variants={cardVariants}>
              <Card className="stat-card shadow-lg">
                <Card.Body>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip("Total number of bookings made")}
                  >
                    <FaClipboardList className="stat-icon text-success" />
                  </OverlayTrigger>
                  <h5 className="stat-title">Total Bookings</h5>
                  <motion.h3
                    className="stat-number"
                    whileHover={{ scale: 1.2, color: "#ffffff" }}
                  >
                    {bookingsCount}
                  </motion.h3>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div variants={cardVariants}>
              <Card className="stat-card shadow-lg">
                <Card.Body>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip("Total number of customer queries received")}
                  >
                    <FaLightbulb className="stat-icon text-warning" />
                  </OverlayTrigger>
                  <h5 className="stat-title">Total Queries</h5>
                  <motion.h3
                    className="stat-number"
                    whileHover={{ scale: 1.2, color: "#ffffff" }}
                  >
                    {queriesCount}
                  </motion.h3>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      <motion.div
        className="additional-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row className="mt-5">
          <Col md={6}>
            <motion.div variants={cardVariants}>
              <Card className="info-card shadow-lg">
                <Card.Body>
                  <h4 className="text-light text-dark">Performance Insights</h4>
                  <p className="info-text">
                    Leverage real-time data to manage users, bookings, and customer feedback for
                    better decision-making and enhanced service quality.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 80 }}
              variants={cardVariants}
            >
              <Card className="progress-card shadow-lg">
                <Card.Body>
                  <h5 className="progress-title">Monthly Engagement</h5>
                  <motion.div
                    className="progress mt-3"
                    initial={{ width: "0%" }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                  >
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </motion.div>
                  <p className="progress-text mt-2">
                    A steady increase in user activity and bookings
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default AdminDashboard;
