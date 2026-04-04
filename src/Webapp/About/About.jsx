import React from "react";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import fi from '../../Images/Images/About/Fi.png';
import Logo from "../../Images/Components/Navbar/four.png";
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
        <br />
        <div>
          <h3 className="text-center text-black" id='h21'>Supporting leaders</h3>
          <p className="text-center" id="p1">We are committed to supporting leaders in their personal and spiritual growth, providing resources and
            opportunities for development, and fostering a culture of mentorship and collaboration.</p>
        </div>
        <br />
        <br />
      </Container>
      <div class='invitation_banner'>
        <Container>
          <br />
          <h3 classname='text-lg' id="h21" style={{ color: "white" }}>Invitation to Sunday Worship Service</h3>
          <p id='p1'>
            In the middle of today’s busy and demanding world, it can be difficult to find moments of peace, hope, and spiritual connection.
            That is why Foursquare Church warmly invites you to join us this Sunday for a refreshing time of worship, fellowship, and encouragement.
            <br />
            <p style={{color:"red"}}>Join us this Sunday for our 10:00 AM church Service </p>
              <br/>
          </p>
          <h3 classname='text-lg' id="h21" style={{ color: "white" }}> Tuesday Weekly Service Invitation </h3>
          <p id='p1'>
            In the middle of a busy week, it is important to pause, reflect, and reconnect with God. Our Tuesday Weekly Service at Foursquare Church
            provides a special opportunity to step away from daily pressures and spend meaningful time in God’s presence.
            <br />
              <p style={{color:"red"}}>Join us this Tuesday for our 7:00 PM church Service </p>
          </p>
          
          <h3 classname='text-lg' id="h21" style={{ color: "white" }}> Thursday Weekly Service Invitation </h3>
          <p id='p1'>
            As the week moves forward, it is important to take time to renew your spirit and draw closer
            to God. Our Thursday Weekly Service at Foursquare Church is a special time set aside for worship, prayer, and spiritual growth.
            <br />
              <p style={{color:"red"}}>Join us this Thursday for our 7:00 PM church Service </p>
          </p>
        </Container>
      </div>
      <br />
      <br />
      <br />
    </div>


  )
}
export default About

