import React from "react";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import fi from '../../Images/Components/Fi.png';
import Logo from "../../Images/Components/Navbar/four.png";
import i_c from '../../Images/Images/About/i_c.jpg';
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
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
      <h1 className="text-center" id='h21'>Ebute Ojora</h1>
      <br/>
      <p id='p1' className="justify-content-center align-items-center  text-center" style={{width:"100%"}}>  
           Welcome to Foursquare Gospel Church, Ebute-Ojora, a community of love,
           faith, and hope where individuals from all walks of life come to worship God, develop spiritually, and help 
           others. We are more than just a house of worship; we are a family bound together by a common faith in the 
           ability of God's Word to transform and the grace made possible by Jesus Christ.Raising a generation of 
           believers who are grounded in truth, empowered by the Holy Spirit, and dedicated to living lives that reflect the 
           character of Christ was the clear objective behind the founding of our church. We have developed from modest
            beginnings into a thriving and dynamic community, 
           but our fundamental goal of getting to know God well and sharing Him with the world has not altered.
           Our work is driven by a deep love of worship. We consider worship to be a way of life reflected in
            spirit and truth rather than merely an activity that takes place inside a structure. We foster
             an environment where people can have a direct encounter with God via sincere worship, prayer,
            and the teaching of the Word.
           Our services are intended to be friendly, interesting, and spiritually uplifting,
            giving everyone a chance to meaningfully encounter God's presence.
          </p>
        <br />
        <br/>
      </Container>
      <div class='invitation_banner'>
        <Container className="justify-content-center align-items-center text-center" style={{width:"80%"}}>
          <br />
          <h2 id="h21" style={{ color: "white"}}>It Start Now With You</h2>
          <p id='p1'>
           Every great spiritual journey, in our opinion at Foursquare Gospel Church, Ebute-Ojora, 
           starts with a single step, and it begins right now with you. This is more than simply a 
           statement; it's a call to action and a reminder that your journey with God, your growth, and your purpose all start where you are right now.
           As members of the global Foursquare family, we are linked to a movement of believers dedicated to sharing the good news of Jesus Christ with all peoples and ages.
            Pastors, chaplains, missionaries, and devoted employees who serve diligently in various roles are among the Foursquare leaders in this organization.
          Here at Ebute-Ojora, we accept this similar calling by empowering people to serve God and make a difference in their community and beyond.
            <br />
            <br/>
            <br/>
          </p>
        </Container>
      </div>
      <br />
      <Container id="tv">
        <div className="">
          <container className="justify-content-center align-items-center">
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
                 <p style={{ color: "red" }}>Join us every Tuesday for our 7:00 PM church Service </p>
                  <p style={{ color: "red" }}>Join us every Thursday for our 7:00 PM church Service </p>
                <p style={{ color: "red" }}>Join us every Sunday for our 10:00 AM church Service </p>
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img className='' src={i_c} style={{width:"100%"}}></img>
            </Col>
          </Row>
          </container>
        </div>
        <br />
        <br />
      </Container>
      <br />
      <br />
    <Footer/>
    </div>
  )
}
export default About


