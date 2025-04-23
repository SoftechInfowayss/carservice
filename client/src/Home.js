import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container, Row, Col, Card ,Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTools, FaCarCrash, FaAward } from 'react-icons/fa';
import { FaSmile, FaCar } from 'react-icons/fa';
import {  FaOilCan, FaBatteryFull, FaTachometerAlt, FaRoad } from 'react-icons/fa';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import ServiceDetailsPage from './ServiceDetailsPage';
const HomePage = () => {
  const [customers, setCustomers] = useState(1000);
  const [services, setServices] = useState(5000);
  const [cars, setcars] = useState(500);

  // Increment counters (simulating live updates)
  const navigate = useNavigate(); 
  useEffect(() => {
    const interval = setInterval(() => {
      setCustomers((prev) => prev + Math.floor(Math.random() * 10));
      setServices((prev) => prev + Math.floor(Math.random() * 30));
      setcars((prev) => prev + Math.floor(Math.random() * 2));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const servicess = [
    {
      title: 'AC Maintenance & Repair',
      text: 'Ensure a comfortable drive with our expert air conditioning services.',
      img: 'https://th.bing.com/th/id/OIP.YjEpVunUN9rDga10BMccJQHaEo?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Oil Change',
      text: 'Regular oil changes for better engine performance and longevity.',
      img: 'https://www.mycar.com.au/media/blog/oil-change.jpg',
    },
    {
      title: 'Brake & Suspension Work',
      text: 'Ensure your safety with expert brake and suspension repairs.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSJjP9LHN7vhwUxDPzbqhFqT873gXuPQNtg&s',
    },
    {
      title: 'Tire Services',
      text: 'From rotation to replacement, we keep your tires in top condition.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-RxGggeHsS_ABfQ5W_BzB4eEXKZhqzLb2w&s',
    },
    {
      title: 'Exhaust System Repairs',
      text: 'Exhaust repairs to ensure efficient engine performance and lower emissions.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThO8-ShhBlUgBaUPwqvYdIi2LHJFaF8jkcDg&s',
    },
    {
      title: 'Lighting & Electrical Repairs',
      text: 'We handle all lighting and electrical repairs for optimal vehicle function.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnobcKamAabX84KaXcagVeTCwnXQkSKNBIw&s',
    },
  ];

  return (
  
    <>
       <Carousel fade indicators={false} controls={true} interval={5000}>
  {/* Slide 1 */}
  <Carousel.Item>
    <div
      style={{
        height: '90vh',
        backgroundImage: `url('/images/Homepage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 50, 0.7), rgba(0, 0, 0, 0.9))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 2rem',
        }}
      >
        <Container className="text-center">
          <motion.h1
            className="display-2 fw-bold"
            style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Premium Car Service
          </motion.h1>
          <motion.p
            className="lead mt-3 mb-4"
            style={{ fontSize: '1.5rem', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Top-notch car servicing, repairs, and maintenance at your convenience.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              onClick={() => navigate('/booking')}
              variant="outline-light"
              size="lg"
              style={{
                borderRadius: '50px',
                padding: '0.75rem 2.5rem',
                fontWeight: 'bold',
                backgroundImage: 'linear-gradient(135deg, #1e3c72, #2a5298)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              }}
            >
              <i className="bi bi-calendar-check"></i> Book Now
            </Button>
          </motion.div>
        </Container>
      </div>
    </div>
  </Carousel.Item>

  {/* Slide 2 */}
  <Carousel.Item>
    <div
      style={{
        height: '90vh',
        backgroundImage: `url('/images/Homepage2.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(135deg, rgba(50, 0, 50, 0.6), rgba(0, 0, 0, 0.9))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 2rem',
        }}
      >
        <Container className="text-center">
          <motion.h1
            className="display-2 fw-bold"
            style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Expert Technicians
          </motion.h1>
          <motion.p
            className="lead mt-3 mb-4"
            style={{ fontSize: '1.5rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Certified experts to handle all your car needs with precision.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              onClick={() => navigate('/service')}
              variant="outline-light"
              size="lg"
              style={{
                borderRadius: '50px',
                padding: '0.75rem 2.5rem',
                fontWeight: 'bold',
                backgroundImage: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                border: 'none',
              }}
            >
              <i className="bi bi-wrench-adjustable"></i> Learn More
            </Button>
          </motion.div>
        </Container>
      </div>
    </div>
  </Carousel.Item>

  {/* Slide 3 */}
  <Carousel.Item>
    <div
      style={{
        height: '90vh',
        backgroundImage: `url('https://img.freepik.com/premium-photo/red-car-is-parked-garage-with-door-open_1185498-122109.jpg?w=900')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(135deg, rgba(0, 50, 50, 0.6), rgba(0, 0, 0, 0.9))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 2rem',
        }}
      >
        <Container className="text-center">
          <motion.h1
            className="display-2 fw-bold"
            style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Fast & Reliable
          </motion.h1>
          <motion.p
            className="lead mt-3 mb-4"
            style={{ fontSize: '1.5rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We ensure quick turnaround times without compromising quality.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              onClick={() => navigate('/signup')}
              variant="outline-light"
              size="lg"
              style={{
                borderRadius: '50px',
                padding: '0.75rem 2.5rem',
                fontWeight: 'bold',
                backgroundImage: 'linear-gradient(135deg, #ff512f, #dd2476)',
                border: 'none',
              }}
            >
              <i className="bi bi-person-plus"></i> Get Started
            </Button>
          </motion.div>
        </Container>
      </div>
    </div>
  </Carousel.Item>
</Carousel>

 <Container className="py-5 mt-5" style={{ background: 'linear-gradient(135deg, #e0e7ff, #e3fdfd)' }}>
  {/* Section Title */}
  <Row className="text-center mb-5">
    <Col>
      <h2 className="mb-4" style={{ color: '#00264d', fontWeight: 'bold', fontSize: '2.5rem' }}>
        Why Choose Us?
      </h2>
      <p style={{ fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto' }}>
        Experience top-quality car services with a focus on safety, reliability, and customer satisfaction.
        Our expertise ensures your vehicle receives the care it deserves.
      </p>
    </Col>
  </Row>

  {/* Enhanced Alternating Light-Colored Cards */}
  <Row className="g-4 text-center">
    {/* Card 1: Routine Maintenance */}
    <Col xs={12} lg={12}>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Card
          className="shadow-sm border-0"
          style={{
            display: 'flex',
            flexDirection: window.innerWidth >= 992 ? 'row-reverse' : 'column',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            overflow: 'hidden',
            alignItems: 'center',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
            className="overflow-hidden"
          >
            <Card.Img
              src="https://carjoz.com/wp-content/uploads/2020/05/General-Service-in-hyderabad.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
          <Card.Body style={{ flex: 1, padding: '40px', textAlign: 'left' }}>
            <FaTools size={50} className="mb-3" style={{ color: '#007bff' }} />
            <Card.Title style={{ fontSize: '1.8rem', color: '#007bff', fontWeight: '600' }}>Routine Maintenance</Card.Title>
            <Card.Text style={{ fontSize: '16px', color: '#666' }}>
              Keep your vehicle in top shape with our comprehensive maintenance services. From oil changes to tire rotations, we ensure your car runs smoothly and safely, minimizing the risk of unexpected issues.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>

    {/* Card 2: Emergency Repairs */}
    <Col xs={12} lg={12}>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Card
          className="shadow-sm border-0"
          style={{
            display: 'flex',
            flexDirection: window.innerWidth >= 992 ? 'row' : 'column',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            overflow: 'hidden',
            alignItems: 'center',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
            className="overflow-hidden"
          >
            <Card.Img
              src="https://th.bing.com/th/id/OIP.VuD1ELotFVL1Wwbki3SO0gHaE8?rs=1&pid=ImgDetMain"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
          <Card.Body style={{ flex: 1, padding: '40px', textAlign: 'left' }}>
            <FaCarCrash size={50} className="mb-3" style={{ color: '#e63946' }} />
            <Card.Title style={{ fontSize: '1.8rem', color: '#e63946', fontWeight: '600' }}>Emergency Repairs</Card.Title>
            <Card.Text style={{ fontSize: '16px', color: '#666' }}>
              Get 24/7 emergency roadside assistance. Our expert team is ready to handle flat tires, battery issues, and breakdowns, ensuring you get back on the road swiftly and safely.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>

    {/* Card 3: Certified Technicians */}
    <Col xs={12} lg={12}>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Card
          className="shadow-sm border-0"
          style={{
            display: 'flex',
            flexDirection: window.innerWidth >= 992 ? 'row-reverse' : 'column',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            overflow: 'hidden',
            alignItems: 'center',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
            className="overflow-hidden"
          >
            <Card.Img
              src="https://th.bing.com/th/id/OIP.dw-4bchaxMJJBUydlMXdigHaEK?rs=1&pid=ImgDetMain"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
          <Card.Body style={{ flex: 1, padding: '40px', textAlign: 'left' }}>
            <FaAward size={50} className="mb-3" style={{ color: '#ffb703' }} />
            <Card.Title style={{ fontSize: '1.8rem', color: '#ffb703', fontWeight: '600' }}>Certified Technicians</Card.Title>
            <Card.Text style={{ fontSize: '16px', color: '#666' }}>
              Our certified technicians provide expert services using the latest tools and technology. Trust our experienced team for diagnostics, repairs, and complete vehicle care.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  </Row>
</Container>


<Container fluid className="py-5" style={{ backgroundColor: '#f4f8fc' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              className="mb-4 fw-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ color: '#004e92' }}
            >
              Our Professional Car Services
            </motion.h2>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ color: '#555', maxWidth: '700px', margin: '0 auto' }}
            >
              Explore our range of professional car services designed to keep your vehicle in peak condition. 
              Experience quality and reliability with every visit.
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {servicess.map((service, idx) => (
            <Col key={idx} sm={12} md={6} lg={4}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card
                  className="shadow h-100 border-0 rounded-lg service-card"
                  style={{
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    transition: 'transform 0.3s',
                  }}
                >
                  <motion.div
                    className="card-img-container"
                    style={{ overflow: 'hidden', borderRadius: '10px 10px 0 0' }}
                  >
                    <motion.img
                      src={service.img}
                      alt={service.title}
                      className="img-fluid"
                      style={{
                        height: '220px',
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                      }}
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.div>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold" style={{ color: '#004e92' }}>
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted mb-3">{service.text}</Card.Text>
                    <Button
                      variant="primary"
                      href="#learnmore"
                      className="custom-btn px-4 py-2"
                      style={{
                        backgroundColor: '#004e92',
                        border: 'none',
                        borderRadius: '20px',
                        transition: 'background-color 0.3s, transform 0.2s',
                        textDecoration:'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#003366';
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#004e92';
                        e.target.style.transform = 'scale(1)';
                      }}
                      onClick={() => navigate('/Service-details')}
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
    <section
  className="achievements-section py-5"
  style={{
    background: 'linear-gradient(135deg, #004e92, #00c6ff)',
    color: '#fff',
  }}
>
  <Container>
    {/* Section Header */}
    <Row className="text-center mb-5">
      <Col>
        <motion.h2
          className="display-4 text-light fw-bold mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ letterSpacing: '2px' }}
        >
          Our Achievements in Numbers
        </motion.h2>
        <motion.p
          className="lead text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: '1.1rem', opacity: 0.8 }}
        >
          A glimpse of our success and commitment to quality service.
        </motion.p>
      </Col>
    </Row>

    {/* Stats Cards with Enhanced Design */}
    <Row className="gy-4">
      {/* Card 1 */}
      <Col lg={4} md={6}>
        <motion.div
          className="stats-card p-4 shadow-lg position-relative d-flex flex-column align-items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.3 },
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '20px',
            width: '100%',
          }}
        >
          <div className="icon-container mb-3" style={{ padding: '15px', borderRadius: '50%', background: '#004e92' }}>
            <FaSmile size={40} className="text-white" />
          </div>
          <h4 className="text-dark mb-3">Satisfied Customers</h4>
          <motion.h1
            className="display-4 text-primary fw-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{fontSize:'50px'}}
          >
            {customers}
          </motion.h1>
        </motion.div>
      </Col>

      {/* Card 2 */}
      <Col lg={4} md={6}>
        <motion.div
          className="stats-card p-4 shadow-lg position-relative d-flex flex-column align-items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.3 },
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '20px',
            width: '100%',
          }}
        >
          <div className="icon-container mb-3" style={{ padding: '15px', borderRadius: '50%', background: '#28a745' }}>
            <FaTools size={40} className="text-white" />
          </div>
          <h4 className="text-dark mb-3">Services Provided</h4>
          <motion.h1
            className="display-4 text-success fw-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{fontSize:'50px'}}
          >
            {services}
          </motion.h1>
        </motion.div>
      </Col>

      {/* Card 3 */}
      <Col lg={4} md={6} className="mx-auto">
        <motion.div
          className="stats-card p-4 shadow-lg position-relative d-flex flex-column align-items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.3 },
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '20px',
            width: '100%',
          }}
        >
          <div className="icon-container mb-3" style={{ padding: '15px', borderRadius: '50%', background: '#ffc107' }}>
            <FaCar size={40} className="text-white" />
          </div>
          <h4 className="text-dark mb-3">Cars Repaired</h4>
          <motion.h1
            className="display-4 text-warning fw-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{fontSize:'50px'}}
          >
            {cars}
          </motion.h1>
        
        </motion.div>
      </Col>
    </Row>
  </Container>
</section>

    <section
      className="testimonials-section py-5"
      style={{
        backgroundColor: '#f5f7fa', // Soft contrast with navbar gradient
      }}
    >
       <Container
      fluid
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #000428, #004e92)",
        color: "#f1f1f1",
      }}
    >
      {/* Section Title */}
      <Row className="text-center mb-5">
        <Col>
          <motion.h2
            className="display-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: "#00d4ff", fontWeight: "bold" }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ color: "#ddd", fontSize: "18px" }}
          >
            Hear from our satisfied customers who trust us with their cars.
          </motion.p>
        </Col>
      </Row>

      {/* Testimonials */}
      <Row className="g-4">
        {[
          {
            name: "John Doe",
            feedback:
              "Excellent service! The team was knowledgeable and friendly, and my car was back on the road in no time.",
            avatar: "https://randomuser.me/api/portraits/men/10.jpg",
            role: "Satisfied Customer",
          },
          {
            name: "Jane Smith",
            feedback:
              "Quick and professional! They identified the problem immediately and fixed it at a fair price.",
            avatar: "https://randomuser.me/api/portraits/women/20.jpg",
            role: "Happy Client",
          },
          {
            name: "Mark Wilson",
            feedback:
              "Fantastic experience! They explained everything clearly and provided top-notch service.",
            avatar: "https://randomuser.me/api/portraits/men/30.jpg",
            role: "Loyal Customer",
          },
        ].map((testimonial, index) => (
          <Col md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="testimonial-item h-100"
            >
              <Card
                className="shadow-lg border-0 p-4 h-100"
                style={{
                  backgroundColor: "#1e2a38",
                  borderRadius: "20px",
                }}
              >
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #00d4ff",
                    }}
                  />
                </div>
                <Card.Body>
                  <FaQuoteLeft
                    className="quote-icon mb-3"
                    size={40}
                    style={{ color: "#00d4ff" }}
                  />
                  <p
                    className="testimonial-text"
                    style={{ fontSize: "16px", color: "#ccc" }}
                  >
                    {testimonial.feedback}
                  </p>
                  <FaQuoteRight
                    className="quote-icon mt-3"
                    size={40}
                    style={{ color: "#00d4ff" }}
                  />
                  <div className="text-end mt-3">
                    <h5 className="mb-0" style={{ color: "#fff" }}>
                      {testimonial.name}
                    </h5>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
      {/* Footer */}
    <Footer />
    </>
  );
};

export default HomePage;
