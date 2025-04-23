import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import { FaUserAlt, FaLock, FaUserShield } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './AdminLogin.css';
import Footer from './Footer';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'taruna' && password === '123456') {
      navigate('/admin');
    } else {
      setResponseMessage('Invalid creditionals!');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <>
    <motion.div
      className="admin-login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="login-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FaUserShield className="icon-admin" />
        </motion.div>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Admin Login
        </motion.h2>
        <motion.p
          className="login-description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Securely access your admin dashboard.
        </motion.p>
        <form onSubmit={handleLogin}>
          <motion.div
            className="input-group"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          >
            <label htmlFor="username">
              <FaUserAlt className="input-icon" /> Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </motion.div>
          <motion.div
            className="input-group"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          >
            <label htmlFor="password">
              <FaLock className="input-icon" /> Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className="login-btn"
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 10px 20px rgba(255, 215, 0, 0.5)',
            }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
    <Footer />
    <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Status</Modal.Title>
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

export default AdminLogin;
