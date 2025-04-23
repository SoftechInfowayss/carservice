import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import react-icons
import { useNavigate } from 'react-router-dom';
function Footer() {
   const navigate = useNavigate(); 
  return (
    <footer
      className="text-light py-5"
      style={{ background: 'linear-gradient(135deg, #000428, #004e92)' }} // Apply the gradient
    >
      <Container>
        <Row>
          {/* Company Info Section */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Car Service</h5>
            <p>
              Best car service center providing top-quality repairs and maintenance for all car models. We ensure your car is in good hands.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <Nav className="flex-column">
            <Nav.Link  className="text-light mb-2" style={{ textDecoration: 'none' }} onClick={() => navigate('/Service')}>
                <i className="fas fa-info-circle me-2"></i> Our Services
              </Nav.Link>
              <Nav.Link  className="text-light mb-2" style={{ textDecoration: 'none' }} onClick={() => navigate('/aboutus')}>
                <i className="fas fa-info-circle me-2"></i>About Us
              </Nav.Link>
              <Nav.Link  className="text-light" style={{ textDecoration: 'none' }}  onClick={() => navigate('/contact')}>
                <i className="fas fa-envelope me-2"></i>Contact Us
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Info Section */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p><i className="fas fa-envelope me-2"></i>Email: info@carservice.com</p>
            <p><i className="fas fa-phone me-2"></i>Phone: +123 456 7890</p>
          </Col>

          {/* Social Links Section */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <Nav.Link href="#" className="text-light p-0">
                <FaFacebookF size={24} /> {/* Facebook Icon */}
              </Nav.Link>
              <Nav.Link href="#" className="text-light p-0">
                <FaTwitter size={24} /> {/* Twitter Icon */}
              </Nav.Link>
              <Nav.Link href="#" className="text-light p-0">
                <FaInstagram size={24} /> {/* Instagram Icon */}
              </Nav.Link>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4">
          <Col className="text-center">
            <hr className="border-light" />
            <p>&copy; 2024 Car Service. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
