import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCarSide, FaWrench, FaOilCan, FaCarCrash, FaBatteryFull, FaRoad, FaPaintRoller, FaCogs, FaCar, FaShower,FaCalendarAlt,FaThumbsUp,FaTools, FaChartLine, FaMobileAlt, FaDatabase, FaRobot} from 'react-icons/fa';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'; 
const popularServicesData = [
  {
    title: 'Full Car Service',
    icon: <FaCarSide size={50} />,
    description: 'A comprehensive car service that includes checking brakes, suspension, oil, and more for smooth performance.',
    bgColor: 'linear-gradient(135deg, #007bff, #00d4ff)',
  },
  {
    title: 'Repair & Maintenance',
    icon: <FaWrench size={50} />,
    description: 'Regular maintenance and repairs to keep your vehicle running safely and reliably.',
    bgColor: 'linear-gradient(135deg, #17a2b8, #00f1f1)',
  },
  {
    title: 'Oil Change',
    icon: <FaOilCan size={50} />,
    description: 'High-quality oil changes to protect and extend the life of your engine.',
    bgColor: 'linear-gradient(135deg, #28a745, #6dfd99)',
  },
  {
    title: 'Battery Replacement',
    icon: <FaBatteryFull size={50} />,
    description: 'Quick and reliable battery replacement for all makes and models.',
    bgColor: 'linear-gradient(135deg, #ffc107, #fff833)',
  },
];

const specializedServicesData = [
  {
    title: 'Collision Repair',
    icon: <FaCarCrash size={50} />,
    description: 'Expert accident recovery and collision repair for damaged vehicles.',
    bgColor: 'linear-gradient(135deg, #dc3545, #ff6b6b)',
  },
  {
    title: 'Car Detailing & Cleaning',
    icon: <FaCar size={50} />,
    description: 'Interior and exterior detailing to make your car look brand new.',
    bgColor: 'linear-gradient(135deg, #6f42c1, #c17aff)',
  },
  {
    title: 'Paint & Scratch Repair',
    icon: <FaPaintRoller size={50} />,
    description: 'Professional paint jobs and scratch repairs to restore your vehicle’s finish.',
    bgColor: 'linear-gradient(135deg, #fd7e14, #ffb14e)',
  },
  {
    title: 'Transmission Repair',
    icon: <FaCogs size={50} />,
    description: 'Expert transmission repairs to ensure smooth gear shifts and performance.',
    bgColor: 'linear-gradient(135deg, #6610f2, #9930ff)',
  },
  {
    title: 'Wheel Alignment',
    icon: <FaRoad size={50} />,
    description: 'Precision wheel alignment services to keep your car handling perfectly.',
    bgColor: 'linear-gradient(135deg, #20c997, #6dfd99)',
  },
];
const cardStyle = {
  borderRadius: '20px',
  overflow: 'hidden',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
const heroVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <>
   <div
  style={{
    position: 'relative',
    height: '550px', // Reduced height
    backgroundImage: 'url(https://t4.ftcdn.net/jpg/10/39/67/19/360_F_1039671986_19v4OASvlxckj7bHzOI7bIxLvw4GLFAX.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.9)',
  }}
>
  {/* Background Gradient Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9))',
    }}
  ></div>

  <Container
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      zIndex: 10,
    }}
  >
    {/* Heading */}
    <motion.h1
      className="display-3 fw-bold"
      style={{
        color: '#fff',
        textShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)',
        letterSpacing: '1.5px',
        fontFamily: "'Poppins', sans-serif",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span style={{ color: '#FFD700' }}>Premium</span> Car Care
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      className="lead"
      style={{
        color: '#f8f9fa',
        maxWidth: '600px',
        margin: '20px auto 0',
        textShadow: '0px 3px 8px rgba(0,0,0,0.6)',
        lineHeight: '1.8',
        fontFamily: "'Roboto', sans-serif",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Comprehensive car services tailored to your needs. Reliable, professional, and fast – because your car deserves the best.
    </motion.p>

    {/* Call-to-Action Button */}
    <motion.div
      style={{ marginTop: '30px' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <a
     onClick={() => navigate('/Service-details')}
        className="btn btn-lg"
        style={{
          padding: '12px 30px',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #007bff, #0056b3)',
          border: 'none',
          color: '#fff',
          fontWeight: '600',
          textDecoration: 'none',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        Explore Services
      </a>
    </motion.div>
  </Container>

  {/* Floating Icons with Yellow Highlights */}
  <motion.img
    src="https://img.icons8.com/ios-filled/50/ffd700/car-service.png"
    alt="Service Icon"
    style={{
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '60px',
      filter: 'drop-shadow(0px 4px 10px rgba(255, 215, 0, 0.7))', // Yellow glow
    }}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  />

  <motion.img
    src="https://img.icons8.com/ios-filled/50/ffd700/automotive.png"
    alt="Auto Icon"
    style={{
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      width: '60px',
      filter: 'drop-shadow(0px 4px 10px rgba(255, 215, 0, 0.7))', // Yellow glow
    }}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  />
</div>

    <div style={{ backgroundColor: '#f0f4f8', paddingTop: '60px', paddingBottom: '60px' }}>
      <Container>
        {/* Header */}
       
      <div className="services-header text-center mb-5">
  <motion.h1
    className="display-4"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    style={{
      fontWeight: '800',
      background: 'linear-gradient(135deg, #000428, #004e92)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      letterSpacing: '2px',
      textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
      lineHeight: '1.2',
    }}
  >
    Our Premium Services
  </motion.h1>

  <motion.div
    className="header-divider mx-auto"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
    style={{
      width: '140px',
      height: '10px',
      background: 'linear-gradient(135deg, #000428, #004e92)',
      marginTop: '18px',
      borderRadius: '5px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 72, 146, 0.7)',
    }}
  ></motion.div>
</div>

      {/* Popular Services Section */}
      <section>
        <h2 className="text-center mb-4" style={{ color: '#007bff', fontWeight: '600' }}>Popular Services</h2>
        <Row className="g-4">
          {popularServicesData.map((service, index) => (
            <Col md={4} key={index}>
              <motion.div whileHover={{ scale: 1.1, rotate: 2 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 shadow-lg h-100" style={{ ...cardStyle, background: service.bgColor, color: '#fff' }}>
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="text-center mb-4">
                      <div className="icon-container mb-3" style={{
                        width: '90px',
                        height: '90px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff33',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                      }}>
                        {service.icon}
                      </div>
                      <h3 style={{ fontWeight: '600', fontSize: '1.25rem' }}>{service.title}</h3>
                      <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>{service.description}</p>
                    </div>
                    <Button variant="light" href="#contact" style={{ fontWeight: 'bold', borderRadius: '50px' }} onClick={()=>{navigate('/Service-details')}}>Learn More</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Specialized Services Section */}
      <section className="mt-5">
        <h2 className="text-center mb-4" style={{ color: '#dc3545', fontWeight: '600' }}>Specialized Services</h2>
        <Row className="g-4">
          {specializedServicesData.map((service, index) => (
            <Col md={4} key={index}>
              <motion.div whileHover={{ scale: 1.1, rotate: -2 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 shadow-lg h-100" style={{ ...cardStyle, background: service.bgColor, color: '#fff' }}>
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="text-center mb-4">
                      <div className="icon-container mb-3" style={{
                        width: '90px',
                        height: '90px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff33',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                      }}>
                        {service.icon}
                      </div>
                      <h3 style={{ fontWeight: '600', fontSize: '1.25rem' }}>{service.title}</h3>
                      <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>{service.description}</p>
                    </div>
                    <Button variant="light" href="#contact" style={{ fontWeight: 'bold', borderRadius: '50px' }}>Learn More</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

        {/* CTA Section */}
        <section className="text-center mt-5" style={{ position: 'relative', padding: '60px 0', background: 'linear-gradient(135deg, #000428, #004e92)', color: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' }}>
  {/* Animated Background */}
  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.05, zIndex: 1 }}></div>

  <Container style={{ position: 'relative', zIndex: 2 }}>
    <motion.h2 className="mb-4 display-5" style={{ fontWeight: '700', letterSpacing: '1px',color:'white' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Ready to Get Started?</motion.h2>
    <motion.p className="lead mb-5" style={{ fontSize: '1.25rem', fontWeight: '500' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>Let us help you keep your car in peak condition. Book your service today!</motion.p>

    {/* Button */}
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <Button variant="light" size="lg" href="#contact" style={{ fontWeight: 'bold', borderRadius: '50px', padding: '10px 30px', color: '#004e92', background: '#fff', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', border: 'none' }}>Contact Us Now</Button>
    </motion.div>
  </Container>
</section>
<Container className="py-5 mt-5" style={{ backgroundColor: '#f1f3f5' }}>
      {/* Section Title */}
      <Row className="text-center mb-5">
        <Col>
          <h2 className="mb-4" style={{ color: '#004e92', fontWeight: 'bold' }}>Customer Journey</h2>
          <p style={{ fontSize: '18px', color: '#333' }}>
            Experience a seamless process from booking to service completion.
          </p>
        </Col>
      </Row>

      {/* Steps of Customer Journey */}
      <Row className="g-4 text-center">
        {/** Reusable card style for uniform dimensions **/}
        <Col md={4}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
            <Card className="shadow-lg border-0" style={{ minHeight: '350px', backgroundColor: '#ffffff', borderRadius: '20px' }}>
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
                <FaCalendarAlt size={50} className="mb-3" style={{ color: '#007bff' }} />
                <Card.Title className="mb-3" style={{ fontSize: '22px', color: '#007bff' }}>1. Book Your Service</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#555' }}>
                  Easily book your service online, pick your preferred time and service type, and get ready for a smooth experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={4}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
            <Card className="shadow-lg border-0" style={{ minHeight: '350px', backgroundColor: '#ffffff', borderRadius: '20px' }}>
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
                <FaTools size={50} className="mb-3" style={{ color: '#28a745' }} />
                <Card.Title className="mb-3" style={{ fontSize: '22px', color: '#28a745' }}>2. Expert Service</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#555' }}>
                  Our certified technicians handle everything, from routine maintenance to emergency repairs, ensuring top-notch service.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={4}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
            <Card className="shadow-lg border-0" style={{ minHeight: '350px', backgroundColor: '#ffffff', borderRadius: '20px' }}>
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
                <FaThumbsUp size={50} className="mb-3" style={{ color: '#ffc107' }} />
                <Card.Title className="mb-3" style={{ fontSize: '22px', color: '#ffc107' }}>3. Satisfaction Guaranteed</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#555' }}>
                  Receive your serviced car with full satisfaction. We ensure every detail is taken care of, giving you peace of mind on the road.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="text-center mt-5">
        <Col>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
            <Button
              variant="primary"
              style={{
                background: 'linear-gradient(135deg, #007bff, #66b2ff)',
                border: 'none',
                padding: '12px 35px',
                fontSize: '18px',
                borderRadius: '30px',
                fontWeight: 'bold',
              }}
              href="#learnmore"
            >
              Book Now
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>

      </Container>
     <Container className="py-5" style={{ backgroundColor: '#f0f4f8' }}>
  {/* Section Title */}
  <Row className="text-center mb-5">
    <Col>
      <h2 className="mb-4" style={{ color: '#004e92', fontWeight: 'bold', fontSize: '2.5rem', letterSpacing: '1px' }}>
        Advanced Technologies We Use
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: 'auto' }}>
        We integrate cutting-edge technology into every service, providing you with the highest quality care and precision for your vehicle.
      </p>
    </Col>
  </Row>

  {/* Technologies Cards */}
  <Row className="g-4">
    {[
      { icon: <FaTools />, color: '#007bff', title: 'State-of-the-Art Diagnostics', text: 'Latest diagnostic tools to quickly identify and resolve issues.' },
      { icon: <FaCogs />, color: '#e83e8c', title: 'Automated Repair Tools', text: 'Automated tools ensuring precision and quality in repairs.' },
      { icon: <FaChartLine />, color: '#28a745', title: 'Performance Monitoring', text: 'Track and enhance vehicle performance with advanced systems.' },
      { icon: <FaMobileAlt />, color: '#fd7e14', title: 'Mobile App Integration', text: 'Stay informed with real-time updates via our app.' },
      { icon: <FaDatabase />, color: '#ffc107', title: 'Data-Driven Insights', text: 'Predictive maintenance for optimized performance.' },
      { icon: <FaRobot />, color: '#6f42c1', title: 'AI-Assisted Repairs', text: 'AI-powered diagnostics for quicker, high-precision service.' },
    ].map((tech, index) => (
      <Col key={index} md={6} lg={4}>
        <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }}>
          <Card className="shadow border-0" style={{
            height: '350px', // Fixed height for uniformity
            borderRadius: '20px',
            backgroundColor: '#ffffff',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
              <div style={{
                fontSize: '3rem',
                color: tech.color,
                marginBottom: '20px',
                transition: 'color 0.3s ease'
              }}>
                {tech.icon}
              </div>
              <Card.Title style={{
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                color: tech.color, 
                textTransform: 'uppercase'
              }}>
                {tech.title}
              </Card.Title>
              <Card.Text style={{
                fontSize: '1rem', 
                color: '#555', 
                marginTop: '15px', 
                fontWeight: '500',
                padding: '0 15px'
              }}>
                {tech.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    ))}
  </Row>

  {/* Call to Action Button */}
  <Row className="text-center mt-5">
    <Col>
      <Button variant="primary" style={{
        background: 'linear-gradient(135deg, #007bff, #66b2ff)',
        border: 'none',
        padding: '12px 35px',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '50px',
        boxShadow: '0 5px 10px rgba(0, 123, 255, 0.3)',
        transition: '0.3s ease',
      }}
      onMouseEnter={(e) => e.target.style.boxShadow = '0 7px 15px rgba(0, 123, 255, 0.5)'}
      onMouseLeave={(e) => e.target.style.boxShadow = '0 5px 10px rgba(0, 123, 255, 0.3)'}>
        Discover More
      </Button>
    </Col>
  </Row>
</Container>


    </div>
    <Footer />
    </>
  );
};

export default ServicesPage;
