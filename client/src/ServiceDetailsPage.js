import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import Footer from './Footer';
const servicesInfo = [
  {
    title: 'Full Car Service',
    description:
      'Comprehensive maintenance including engine diagnostics, fluid check, brake inspection, and tire rotation.',
    features: ['Engine Diagnostics', 'Fluid Check', 'Brake Inspection', 'Tire Rotation'],
    img: 'https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg',
    benefits: 'Reduces long-term costs and ensures safety.',
  },
  {
    title: 'Repair & Maintenance',
    description:
      'Comprehensive repair services including brake repair, oil changes, and suspension maintenance.',
    features: ['Brake Repair', 'Oil Change', 'Battery Check', 'Suspension Maintenance'],
    img: 'https://cdn.prod.website-files.com/637d6390b70424b49c14ff1e/640f9b7180be91100cbcbe07_delivery-vehicle-maintenance-hero.webp',
    benefits: 'Prevents unexpected breakdowns.',
  },
  {
    title: 'Battery Replacement',
    description:
      'Reliable battery replacement with high-quality batteries, ensuring your car starts every time.',
    features: ['Battery Check', 'Quick Replacement', 'Warranty Included', 'Old Battery Disposal'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FsLQelTCOddBokbOe4Dt0p5SQi9CP6mMJw&s',
    benefits: 'Prevents battery-related issues.',
  },
  {
    title: 'Oil Change',
    description:
      'Regular oil changes with top-grade engine oil, reducing wear and extending engine life.',
    features: ['Synthetic Oil', 'Filter Replacement', 'Engine Health Check', 'Quick Service'],
    img: 'https://www.mycar.com.au/media/blog/oil-change.jpg',
    benefits: 'Improves engine longevity.',
  },
  {
    title: 'Collision Repair',
    description:
      'Expert collision repair services to restore your car’s appearance and safety after an accident.',
    features: ['Dent Repair', 'Frame Alignment', 'Paint Matching', 'Parts Replacement'],
    img: 'https://www.shutterstock.com/image-photo/mechanic-garage-auto-workshop-team-600nw-2293582995.jpg',
    benefits: 'Restores vehicle aesthetics and safety.',
  },
  {
    title: 'Car Detailing & Cleaning',
    description:
      'Thorough car detailing and cleaning to keep your car spotless inside and out.',
    features: ['Interior Cleaning', 'Exterior Waxing', 'Polishing', 'Stain Removal'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijonH__3RYgzrbBpHKC-ad4PbjiQS0Gad-A&s',
    benefits: 'Enhances aesthetics and maintains cleanliness.',
  },
  {
    title: 'Paint & Scratch Repair',
    description:
      'Professional paint and scratch repair to make your car look brand new.',
    features: ['Scratch Removal', 'Repainting', 'Color Matching', 'Rust Prevention'],
    img: 'https://carfromjapan.com/wp-content/uploads/2023/08/car-scratch-repair.jpg',
    benefits: 'Restores car’s original appearance.',
  },
  {
    title: 'Transmission Repair',
    description:
      'Efficient transmission repair services to ensure smooth gear shifting.',
    features: ['Diagnostics', 'Fluid Replacement', 'Component Repairs', 'System Check'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7Am1AobhfCDmuzLsPR7m5dtcrqggUX5AlA&s',
    benefits: 'Improves driving performance.',
  },
  {
    title: 'Wheel Alignment',
    description:
      'Precise wheel alignment to improve handling and tire life.',
    features: ['Alignment Check', 'Tire Balancing', 'Suspension Adjustment', 'Tire Rotation'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-RxGggeHsS_ABfQ5W_BzB4eEXKZhqzLb2w&s',
    benefits: 'Enhances driving safety and comfort.',
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ServiceDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{ backgroundColor: '#f0f2f5' }}>
      {/* Hero Section */}
     
      {/* Services Section */}
      <Container className="py-5" id="services">
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
    Our Services
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

        <Row>
        {servicesInfo.map((service, index) => (
  <Col md={6} lg={4} className="mb-4" key={index}>
    <motion.div
      className="service-card shadow-lg"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card className="border-0" style={{ height: '660px', borderRadius: '15px', overflow: 'hidden' }}>
        <motion.img
          src={service.img}
          alt={service.title}
          className="card-img-top"
          whileHover={{ scale: 1.05 }}
          style={{
            height: '200px',
            objectFit: 'cover',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        />
        <Card.Body>
          <Card.Title className="text-center fw-bold text-primary" style={{ fontSize: '1.5rem' }}>
            {service.title}
          </Card.Title>
          <div
            className="text-center py-2 my-2"
            style={{
              background: 'linear-gradient(135deg, #000428, #004e92)',
              color: 'white',
              borderRadius: '10px',
              fontWeight: '600',
              fontSize: '1.2rem',
            }}
          >
            ₹{
              index === 0 ? '999' :
              index === 1 ? '1299' :
              index === 2 ? '1499' :
              index === 3 ? '1999' :
              index === 4 ? '2499' : '2999'
            } / Service
          </div>
          <Card.Text style={{ minHeight: '60px' }}>{service.description}</Card.Text>
          <h6>Key Features:</h6>
          <ul style={{ paddingInlineStart: '20px' }}>
            {service.features.map((feature, i) => (
              <li key={i} style={{ marginBottom: '5px' }}>
                <FaCheckCircle className="text-success me-2" />
                {feature}
              </li>
            ))}
          </ul>
          <p><strong>Benefits:</strong> {service.benefits}</p>
          <div className="text-center">
            <Button
              variant="primary"
              onClick={() => navigate('/booking')}
              style={{
                backgroundColor: '#004e92',
                borderColor: '#004e92',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '30px',
              }}
            >
              Book Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>
))}

        </Row>
      </Container>

      {/* Call to Action */}
      <div style={{ background: '#004e92', padding: '40px 0', color: '#fff' }}>
        <Container className="text-center">
          <h4>Need Assistance? Contact Us Today!</h4>
          <Button variant="light" className="m-2">Call Now</Button>
          <Button variant="light" className="m-2">Email Us</Button>
        </Container>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ServiceDetailsPage;
