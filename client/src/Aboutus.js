import React from 'react';
import { Container, Row, Col, Image, Button,Card ,Nav} from 'react-bootstrap';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { AiOutlineUser, AiOutlineTool, AiOutlineShake } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const AboutUs = () => {
  const navigate = useNavigate(); 
  return (
    <>
    <Row 
  className="align-items-center mb-5" 
  style={{ background: 'linear-gradient(135deg, #004e92, #000428)', padding: '70px 30px', borderRadius: '15px', position: 'relative', overflow: 'hidden' }}
>
  {/* Decorative Background Elements */}
  <div
    style={{
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '150px',
      height: '150px',
      background: 'rgba(255, 215, 0, 0.2)',
      borderRadius: '50%',
      zIndex: 1,
    }}
  ></div>
  <div
    style={{
      position: 'absolute',
      bottom: '-70px',
      left: '-70px',
      width: '200px',
      height: '200px',
      background: 'rgba(255, 215, 0, 0.2)',
      borderRadius: '50%',
      zIndex: 1,
    }}
  ></div>

  <Col md={6} style={{ zIndex: 2 }}>
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        className="fw-bold"
        style={{
          fontSize: '2.8rem',
          color: '#ffffff',
          lineHeight: '1.3',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        About <span style={{ color: '#FFD700' }}>Our Car Service</span>
      </h1>
      <div
        style={{
          width: '80px',
          height: '5px',
          background: '#FFD700',
          margin: '20px 0',
          borderRadius: '10px',
        }}
      ></div>
      <p
        className="mt-4"
        style={{
          color: '#d1d1d1',
          fontSize: '1.1rem',
          fontFamily: "'Roboto', sans-serif",
          lineHeight: '1.8',
          maxWidth: '500px',
        }}
      >
        We are committed to providing premium car service, repair, and maintenance to ensure your vehicle always performs at its best. 
        With a legacy of trust and excellence, our experienced team is here to elevate your driving experience with precision and care.
      </p>
      <motion.a
        href="#team"
        style={{
          display: 'inline-block',
          padding: '12px 30px',
          marginTop: '20px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #FFD700, #FFC107)',
          color: '#000428',
          fontWeight: '600',
          fontFamily: "'Poppins', sans-serif",
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.2)';
        }}
        onClick={() => navigate('/contact')}
      >
        Contact Us
      </motion.a>
    </motion.div>
  </Col>

  <Col md={6} style={{ zIndex: 2, textAlign: 'center' }}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="https://media.istockphoto.com/id/1589417945/photo/hand-of-mechanic-holding-car-service-and-checking.jpg?s=612x612&w=0&k=20&c=02eGeLsQDyppYAK7k7WwxGUyxgG2a5n43yetegKvIfI="
        fluid
        rounded
        className="shadow-lg"
        style={{
          border: '5px solid #FFD700',
          borderRadius: '15px',
          maxHeight: '400px',
        }}
      />
    </motion.div>
  </Col>
</Row>

    <Container className="py-5">
      {/* Section 1: Hero Section */}
      
      {/* Section 2: Mission Statement */}
      {/* Light background for section contrast */}
      <div className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa, #ffffff)' }}>
  <Row className="align-items-center">
    {/* Mission Section - Image Left, Text Right */}
    <Col md={12} className="mb-4">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Card className="shadow-lg border-0 h-100 d-flex flex-row" style={{ backgroundColor: '#ffffff', borderRadius: '15px', overflow: 'hidden' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden" style={{ width: '50%', minHeight: '300px' }}>
            <Image
              src="https://img.freepik.com/premium-photo/man-is-looking-engine-that-is-open-hood-is-open_1082211-16568.jpg?w=826"
              fluid
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
          <Card.Body className="text-center p-5 d-flex flex-column justify-content-center align-items-center" style={{ width: '50%' }}>
            <Card.Title className="display-6 mb-3" style={{ color: '#004e92', fontWeight: 'bold' }}>Our Mission</Card.Title>
            <Card.Text className="lead" style={{ color: '#333' }}>
              To provide top-notch car services that exceed our customers' expectations while ensuring safety, reliability, and satisfaction in every interaction.
            </Card.Text>
            <Button variant="primary" href="#learnmore" className="mt-3" style={{ background: 'linear-gradient(135deg, #007bff, #66b2ff)', border: 'none', borderRadius: '50px', padding: '10px 30px' ,textDecoration:'none'}}>Learn More</Button>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>

    {/* Vision Section - Image Right, Text Left */}
    <Col md={12} className="mb-4">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Card className="shadow-lg border-0 h-100 d-flex flex-row-reverse" style={{ backgroundColor: '#ffffff', borderRadius: '15px', overflow: 'hidden' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden" style={{ width: '50%', minHeight: '300px' }}>
            <Image
              src="https://img.freepik.com/free-photo/auto-mechanic-businesswoman-cooperating-while-checking-vehicle-hood-workshop_637285-7688.jpg?t=st=1729271908~exp=1729275508~hmac=98fba54c20d08f0dc603f720754bccb8952a88600a327b4cc842cdb20d9b5fe5&w=900"
              fluid
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
          <Card.Body className="text-center p-5 d-flex flex-column justify-content-center align-items-center" style={{ width: '50%' }}>
            <Card.Title className="display-6 mb-3" style={{ color: '#004e92', fontWeight: 'bold' }}>Our Vision</Card.Title>
            <Card.Text className="lead" style={{ color: '#333' }}>
              To become the most trusted and reliable car service provider in the region, recognized for our customer-centric approach and top-tier expertise.
            </Card.Text>
            <Button variant="primary" href="#vision" className="mt-3" style={{ background: 'linear-gradient(135deg, #007bff, #66b2ff)', border: 'none', borderRadius: '50px', padding: '10px 30px',textDecoration:'none' }}>Discover More</Button>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  </Row>
</div>


      {/* Values Section */}
      <Row className="mt-5">
  <Col>
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card className="border-0 shadow-lg rounded-lg" style={{ background: 'linear-gradient(135deg, #f0f5fa, #e1e8ee)' }}>
        <Card.Body className="text-center py-5">
          <h2 className="mb-5" style={{ color: '#004e92', fontWeight: 'bold', fontSize: '2.5rem' }}>Our Core Values</h2>

          <Row className="justify-content-center mb-4">
            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                className="text-center p-4" 
                style={{ background: 'linear-gradient(135deg, #007bff, #66b2ff)', borderRadius: '15px', color: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
              >
                <div className="bg-white text-primary rounded-circle p-4 d-inline-block mb-3">
                  <AiOutlineUser size={50} style={{ color: '#007bff' }} />
                </div>
                <h5 style={{ color: '#fff', fontWeight: '600' }}>Customer Satisfaction</h5>
                <p className="text-white">
                  We strive to exceed our customers' expectations with exceptional service and support.
                </p>
              </motion.div>
            </Col>

            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                className="text-center p-4" 
                style={{ background: 'linear-gradient(135deg, #007bff, #66b2ff)', borderRadius: '15px', color: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
              >
                <div className="bg-white text-primary rounded-circle p-4 d-inline-block mb-3">
                  <AiOutlineShake size={50} style={{ color: '#007bff' }} />
                </div>
                <h5 style={{ color: '#fff', fontWeight: '600' }}>Integrity</h5>
                <p className="text-white">
                  We maintain honesty and transparency in all our interactions, building trust with every service.
                </p>
              </motion.div>
            </Col>

            <Col md={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                className="text-center p-4" 
                style={{ background: 'linear-gradient(135deg, #007bff, #66b2ff)', borderRadius: '15px', color: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
              >
                <div className="bg-white text-primary rounded-circle p-4 d-inline-block mb-3">
                  <AiOutlineTool size={50} style={{ color: '#007bff' }} />
                </div>
                <h5 style={{ color: '#fff', fontWeight: '600' }}>Quality Service</h5>
                <p className="text-white">
                  Dedicated to providing top-quality service that ensures safety and reliability for all our customers.
                </p>
              </motion.div>
            </Col>
          </Row>

          <Button 
            variant="light" 
            href="#values" 
            className="mt-4 px-5 py-3"
            style={{
              background: 'linear-gradient(135deg, #007bff, #66b2ff)',
              border: 'none',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '50px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              textDecoration: 'none',
            }}
          >
            Learn More About Us
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>
</Row>

      {/* Section 3: Why Choose Us */}
    

      {/* Section 4: Team Section */} <div id="team" className="py-5 mt-5" style={{ background: 'linear-gradient(135deg, #e0f7fa, #ffffff)' }}>
      <Container className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
  <Row className="text-center mb-5">
    <Col>
      <h2 className="text-dark" style={{ fontSize: '2.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>
        Meet Our Team
      </h2>
      <p className="lead text-muted" style={{ maxWidth: '600px', margin: 'auto' }}>
        The people behind our success and your satisfaction
      </p>
    </Col>
  </Row>

  <Row className="g-4">
    {[
      {
        img: "https://img.freepik.com/free-photo/mechanic-holding-tools-while-standing-workshop_342744-160.jpg",
        avatar: "https://th.bing.com/th/id/OIP.ffRSTZuqnSTWzPaHqT8dRwHaEK?w=1778&h=999&rs=1&pid=ImgDetMain",
        name: "John Doe",
        position: "Lead Mechanic",
        description: "John has over 10 years of experience in the automotive industry. His expertise ensures your car is in great hands."
      },
      {
        img: "https://img.freepik.com/free-photo/portrait-smiling-young-mechanic-with-arms-crossed_342744-133.jpg",
        avatar: "https://i.pinimg.com/originals/46/46/3f/46463f00c0db960a677c04f072238b82.png",
        name: "Jane Smith",
        position: "Service Manager",
        description: "Jane's organizational skills and friendly service make her a customer favorite."
      },
      {
        img: "https://img.freepik.com/free-photo/auto-mechanic-with-arms-crossed-garage_342744-134.jpg",
        avatar: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
        name: "Michael Lee",
        position: "Technician",
        description: "Michael’s attention to detail ensures your car leaves in the best condition possible."
      }
    ].map((teamMember, index) => (
      <Col key={index} md={4}>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Card className="shadow-lg border-0 h-100" style={{
            borderRadius: '15px',
            overflow: 'hidden',
            transition: 'transform 0.3s, box-shadow 0.3s ease',
          }}>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <Image
                src={teamMember.img}
                fluid
                className="img-fluid"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  width: '100%',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
            <Card.Body className="text-center d-flex flex-column align-items-center">
              <Image
                src={teamMember.avatar}
                roundedCircle
                fluid
                className="mb-3 shadow"
                style={{
                  width: '120px',
                  height: '120px',
                  border: '5px solid #007bff',
                  transition: 'transform 0.3s, border-color 0.3s ease'
                }}
              />
              <h4 className="text-primary" style={{ fontSize: '1.25rem', fontWeight: '600' }}>{teamMember.name}</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{teamMember.position}</p>
              <Card.Text style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>
                "{teamMember.description}"
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    ))}
  </Row>
</Container>

</div>

<div id="behind-the-scenes" className="py-5" style={{ backgroundColor: '#f7f9fc' }}>
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold">Behind the Scenes</h2>
        <p className="text-center text-muted mb-5">
          Discover the passion, tools, and dedication behind our exceptional service.
        </p>
        
        <Row className="g-4">
          {/* Image 1 */}
          <Col md={4}>
            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="border-0 shadow-lg rounded-lg overflow-hidden h-100">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/584c56b5be659489bb1ae965/1551400467752-A0RGNLJZNKG64I232311/Top+5+Ways+to+Recruit+Rockstar+Automotive+Service+Technicians.jpg"
                    fluid
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <Card.Body className="text-center">
                  <h5 className="text-primary fw-semibold">Expert Technicians</h5>
                  <p className="text-muted">
                    Our skilled team ensures every service meets the highest standards.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Image 2 */}
          <Col md={4}>
            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="border-0 shadow-lg rounded-lg overflow-hidden h-100">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <Image
                    src="https://thumbs.dreamstime.com/b/tools-mechanic-garage-assortment-kit-car-service-61119026.jpg"
                    fluid
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <Card.Body className="text-center">
                  <h5 className="text-primary fw-semibold">Quality Tools</h5>
                  <p className="text-muted">
                    We use only the best tools and equipment to service your vehicle.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Image 3 */}
          <Col md={4}>
            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="border-0 shadow-lg rounded-lg overflow-hidden h-100">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <Image
                    src="https://www.shutterstock.com/image-photo/car-detailing-polishing-concept-hands-600nw-1703968147.jpg"
                    fluid
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <Card.Body className="text-center">
                  <h5 className="text-primary fw-semibold">Attention to Detail</h5>
                  <p className="text-muted">
                    We take the time to ensure every detail is addressed for your peace of mind.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <Button 
              variant="primary" 
              size="lg" 
              href="#services" 
              className="px-4 py-3 fw-bold shadow-lg rounded-pill"
              style={{ transition: 'background-color 0.3s ease' ,textDecoration:'none'}}
              onClick={() => navigate('/Service')}
            >
              Explore Our Services
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    
      {/* Section 5: Call to Action */}
      <Row className="py-5 mt-5 mb-5" style={{ background: 'linear-gradient(135deg, #0056b3, #003366)', color: '#fff', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}>
  <Col md={6} className="d-flex align-items-center justify-content-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '30px',
        borderRadius: '20px',
        backdropFilter: 'blur(6px)',
      }}
    >
      <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Ready to Experience the Best Car Service?</h2>
      <p className="lead" style={{ fontSize: '1.2rem' }}>
        Our team is here to provide top-notch services for your vehicle. Don't wait, schedule your service today!
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{ display: 'inline-block' }}
      >
        <Button variant="light" size="lg" href="#contact" className="px-4 py-2" style={{ borderRadius: '50px', transition: 'transform 0.3s ease' ,textDecoration:'none'}}  onClick={() => navigate('/contact')}>Contact Us Today</Button>
      </motion.div>
    </motion.div>
  </Col>

  <Col md={6} className="d-flex align-items-center justify-content-center">
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
      }}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src="https://media.istockphoto.com/id/1387759698/photo/hand-of-car-mechanic-with-wrench-auto-repair-garage-mechanic-works-on-the-engine-of-the-car.jpg?s=612x612&w=0&k=20&c=JVYyKMvP-NN-bTMyIF-pNrifwvjyjKcIRjTVEmSmPsM="
        alt="Car Service"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '400px',
          transition: 'transform 0.3s ease',
        }}
      />
    </motion.div>
  </Col>
</Row>

<Container fluid className="py-5 mt-5" style={{ background: 'linear-gradient(135deg, #e0f7fa, #ffffff)' }}>
  <Container>
    <Row className="text-center mb-5">
      <Col>
        <h2 className="mb-4" style={{ color: '#004e92', fontWeight: 'bold', letterSpacing: '1px' }}>What Our Customers Say</h2>
        <p className="lead" style={{ color: '#333' }}>Your feedback is our greatest asset!</p>
      </Col>
    </Row>

    <Row className="g-4">
      {/* Testimonial 1 */}
      <Col md={4}>
        <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }} transition={{ duration: 0.3 }}>
          <Card className="shadow-lg h-100 border-0" style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '25px', transition: 'transform 0.4s ease' }}>
            <Card.Body className="text-center">
              <motion.img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="John Doe"
                className="rounded-circle mb-4"
                whileHover={{ scale: 1.1 }}
                style={{ width: '120px', height: '120px', objectFit: 'cover', border: '6px solid #004e92' }}
              />
              <motion.div whileHover={{ rotate: -5 }}>
                <i className="fas fa-quote-left fa-2x mb-3" style={{ color: '#004e92' }}></i>
              </motion.div>
              <Card.Text className="lead mt-3" style={{ fontStyle: 'italic', color: '#555' }}>
                "The service was exceptional! My car has never run better."
              </Card.Text>
              <footer className="blockquote-footer mt-4">John Doe</footer>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>

      {/* Testimonial 2 */}
      <Col md={4}>
        <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }} transition={{ duration: 0.3 }}>
          <Card className="shadow-lg h-100 border-0" style={{ backgroundColor: '#f0f8ff', borderRadius: '20px', padding: '25px', transition: 'transform 0.4s ease' }}>
            <Card.Body className="text-center">
              <motion.img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Jane Smith"
                className="rounded-circle mb-4"
                whileHover={{ scale: 1.1 }}
                style={{ width: '120px', height: '120px', objectFit: 'cover', border: '6px solid #004e92' }}
              />
              <motion.div whileHover={{ rotate: -5 }}>
                <i className="fas fa-quote-left fa-2x mb-3" style={{ color: '#004e92' }}></i>
              </motion.div>
              <Card.Text className="lead mt-3" style={{ fontStyle: 'italic', color: '#555' }}>
                "Professional staff and timely repairs. Highly recommend!"
              </Card.Text>
              <footer className="blockquote-footer mt-4">Jane Smith</footer>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>

      {/* Testimonial 3 */}
      <Col md={4}>
        <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }} transition={{ duration: 0.3 }}>
          <Card className="shadow-lg h-100 border-0" style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '25px', transition: 'transform 0.4s ease' }}>
            <Card.Body className="text-center">
              <motion.img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Michael Lee"
                className="rounded-circle mb-4"
                whileHover={{ scale: 1.1 }}
                style={{ width: '120px', height: '120px', objectFit: 'cover', border: '6px solid #004e92' }}
              />
              <motion.div whileHover={{ rotate: -5 }}>
                <i className="fas fa-quote-left fa-2x mb-3" style={{ color: '#004e92' }}></i>
              </motion.div>
              <Card.Text className="lead mt-3" style={{ fontStyle: 'italic', color: '#555' }}>
                "Great experience overall. Will come back for future services!"
              </Card.Text>
              <footer className="blockquote-footer mt-4">Michael Lee</footer>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    </Row>
  </Container>
</Container>

    </Container>
    <Footer />
    </>
  );
};

export default AboutUs;
