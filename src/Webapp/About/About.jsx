import React from "react";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import fi from '../../Images/Components/Fi.png';
import Logo from "../../Images/Components/Navbar/four.png";
import i_c from '../../Images/Images/About/i_c.png';
import { Link } from "react-router-dom";
import './About.css';

function About() {
  return (
    <div>
      <Navbar1 about={{ borderBottom: '3px solid red' }} />
      <div class='about_banner d-flex justify-content-center align-items-center text-center'>
        <br />
        <br />
        <Container>
          <font className='text-warning fs-1'>ABOUT</font> <font className='text-white fs-1'>US</font>
          <br />
          <img src={fi} style={{ width: "150px" }}></img>
          <br />
          <font className='text-white fs-6'><Link to="#" className='text-primary'>Home</Link> /About Us</font>
        </Container>
      </div>
      <br />
      <Container>
        <p id='p1' className="text-center">Foursquare began as a local church in 1923, and we’ve been serving people to send ever since. We strive to develop “more and
          growing leaders together on mission.” Learn more about where we are going and how we’re getting there.</p>
        <br />
        <br />
        <video controls style={{ width: "70%", height: "300px", display: "block", marginLeft: "auto", marginRight: "auto" }}>
          <source src="https://res.cloudinary.com/dgsarpq5w/video/upload/v1700000000/video1_ky8l7n.mp4" type="video/mp4" />
        </video>
        <br />
        <br />
        <br/>
        <br/>
      </Container>
      <div class='invitation_banner'>
        <Container className="justify-content-center align-items-center text-center" style={{width:"80%"}}>
          <br />
          <h2 id="h21" style={{ color: "white"}}>It Start Now With You</h2>
          <p id='p1'>
            Foursquare leaders include pastors, chaplains, missionary workers and more. Growth starts with you and is a lifelong journey. We’re never done, and it’s even better when we’re growing together. 
            Our relationship with God, with our family, with each other as a global movement—it all matters. We join in the work of the Holy Spirit being disciples of Jesus making disciples of Jesus.
            <br />
          </p>
        </Container>
      </div>
      <br />
      <Container id="tv">
        <div className="d-flex align-items-center justify-content-center">
          <Row>
            <Col xs={12} md={6}>
            <br/>
            <br/>
              <h3 classname='text-lg' id="h21" style={{ color: "black" }}>Invitation to Tuesday and Thursday Weekly Service and Sunday Worship Service.
              </h3>
              <br />
              <div className="border-bottom border-2 border-danger" style={{ width: "50%" }} ></div>
              <br />
              <p id='p1'>
                Finding moments of serenity, hope, and spiritual connection can occasionally be challenging in the hectic and demanding world of today. For this reason, 
                Foursquare Church cordially invites you to join us every Tuesday, Thursday, and Sunday for a revitalizing period of worship, companionship, and support.
                <br />
                <br/>
                 <p style={{ color: "red" }}>Join us this Tuesday for our 7:00 PM church Service </p>
                  <p style={{ color: "red" }}>Join us this Thursday for our 7:00 PM church Service </p>
                <p style={{ color: "red" }}>Join us this Sunday for our 10:00 AM church Service </p>
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img className='img1' src={i_c}></img>
            </Col>
          </Row>
        </div>
        <br />
        <br />
      </Container>
      <br />
      <br />
    </div>


  )
}
export default About


