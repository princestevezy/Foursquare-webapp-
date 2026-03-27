import React from "react";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import four1 from '../../Images/Images/Home/4f.jpg';
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar1 home={{borderBottom:'3px solid red'}}/>
      <div class='cover'>
        <div class='banner d-flex justify-content-center align-items-center text-center '>
          <br />
          <br />
          <Container>
            Connecting People
            <br />
            to Loving God
            <br />
            <Button variant="danger" size="lg">
              About Us
            </Button>
          </Container>
        </div>
      </div>
      <br />
       <Container id="tv">
        <div className="d-flex justify-content-center">
          <Row>
            <Col xs={12} md={6}>
              <img className='img1' src={four1}></img>
            </Col>
            <Col xs={12} md={6}>          
            <font id="h51">The church</font>
           <font id="h21">Giving is an action of worship, affection and
             love for Jesus.</font>
             <br/>
              <div className="border-bottom border-2 border-danger" style={{width:"50%"}} ></div>  
              <br/>
               <p id='p1'>We are a church that believes in Jesus, a church that loves God and people. Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for 
                authentic worship, are passionate about the church, and are on
                mission to see God’s kingdom established across the earth. </p>         
            </Col>
          </Row>      
        </div>
         <br/>
          <br/>
      </Container>  
    </div>

  );
}
export default Home;
