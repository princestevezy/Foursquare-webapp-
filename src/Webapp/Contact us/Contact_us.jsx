import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt,FaWhatsapp } from "react-icons/fa";
import fi from '../../Images/Components/Fi.png';
import Footer from "../../Components/Footer/Footer";
import './Contact_us.css';

function Contact_us() {
  return (
    <div>
      <Navbar1 contact={{ borderBottom: '3px solid red' }} />
      <div class='contactus_banner d-flex justify-content-center align-items-center text-center'>
        <br />
        <br />
        <Container>
          <font className='text-warning fs-1'>CONTACT</font><font className='text-white fs-1'> US</font>
          <br />
          <img src={fi} style={{ width: "150px" }}></img>
          <br />
          <font className='text-white fs-6'><Link to="#" className='text-primary'>Home</Link> /Contact Us</font>
        </Container>
      </div> <Container className="text-center mt-5">
        <Row>
          <Col md={6}>
            <Card className="p-3 shadow mb-2 cfont-card">
              <FaPhone size={30} />
              <h5 className="mt-2">Phone</h5>
              <p>+234 8132728299</p>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-3 shadow mb-2 cfont-card">
              <FaEnvelope size={30} />
              <h5 className="mt-2">Email</h5>
              <p>info@yourchurch.com</p>
            </Card>
          </Col>
          <Col md={6}>
          <Card className="p-3 shadow mb-2 cfont-card">
            <FaWhatsapp size={25}/>
            <h5 className="mt-2">WhatsApp</h5>
            <p><a href="https://wa.me/2348055756500" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
          </Card>
        </Col>
          <Col md={6}>
            <Card className="p-3 shadow mb-2 cfont-card">
              <FaMapMarkerAlt size={30} />
              <h5 className="mt-2">Location</h5>
              <p>Lagos, Nigeria</p>
            </Card>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <Footer contactus={{ borderBottom: '3px solid red' }} />
    </div>

  )
}
export default Contact_us;
