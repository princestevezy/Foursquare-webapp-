import React from "react";
import four from './four.png';
import { Container,Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css';







function Footer () {
  return (
    <footer className="bg-light text-black py-4 border shadow">
    <Container className="mb-4">
    <br/>
    <Row>
     <Col md={6}>
    <div>
    <font className="text-black justify-content-center" id='Footerheading1'>
    <h5 className="font-weight-bold footersm">Contact us</h5>
      Reach out to<br/> Salvation Chapel</font>
      <br/>
      <b><span className="font-weight-bold fs-6 text-black footerspan">OUR MAILING ADDRESS</span></b>
      <p>info@yourchurch.com </p>
      <br/>
      <span className="font-weight-bold fs-6 footerspan"><b>Contact the Salvation chapel Team </b></span>
      <p>+234 8132728299 </p>
    </div>
    </Col>
     <Col md={3}>
    <div>
      <h5 className="footersm">About us</h5>
        </div>
        </Col>
          <Col md={3}>
     <div>
        <h5 className="footersm">Follow Us On</h5>
        <a href="#" className="text-blue fs-4">
          <FaFacebook />
        </a>
        <a href="" className="fs-4 ps-2">
          <FaTwitter style={{ color: "#000000" }}/>
        </a>
         <a href="" className="fs-4 ps-2">
          <FaInstagram style={{ color: "#E1306C" }} />
        </a>
        <a href="" className="fs-4 ps-2">
           <FaYoutube style={{ color: "#FF0000" }} />
         </a>
        </div>
        </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

