import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaTools, FaUserShield } from 'react-icons/fa'; // Import icons
import './Navbarr.css'; // Custom CSS for more styles

function Navbarr() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar p-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-name" style={{ color: "white" }}>
          <FaHome className="me-2" /> Car Service
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/aboutus" className="nav-link-item">
              <FaInfoCircle className="me-1" /> About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="nav-link-item">
              <FaTools className="me-1" /> Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-item">
              <FaPhone className="me-1" /> Contact Us
            </Nav.Link>
            <Button
              variant="light"
              as={Link} 
              to="/login" 
              className="custom-button login me-2"
            >
              Login
            </Button>
            <Button
              variant="light"
              as={Link} 
              to="/Signup" 
              className="custom-button signup me-3"
            >
              Sign Up
            </Button>
          
            <Button
              variant="outline-light"
              as={Link}
              to="/booking"
              className="custom-icon-button me-3"
              title="Book Now"
            >
              <FaTools />
            </Button>

            <Button
              variant="outline-light"
              as={Link}
              to="/admin-login"
              className="custom-icon-button me-3"
              title="Admin Login"
            >
              <FaUserShield />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
