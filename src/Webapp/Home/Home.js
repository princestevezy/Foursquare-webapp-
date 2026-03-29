import React from "react";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col} from "react-bootstrap";
import  Card  from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import four1 from '../../Images/Images/Home/4f.jpg';
import pastor from '../../Images/Images/Home/pastor.png';
import './Home.css';


function Home() {
  const imageUrl1 = `https://res.cloudinary.com/dgsarpq5w/image/upload/image1_jhiyzw;`
  const imageUrl2 = `https://res.cloudinary.com/dgsarpq5w/image/upload/image2_as5094.avif;`
  const imageUrl3 = `https://res.cloudinary.com/dgsarpq5w/image/upload/image3_gt7dhs.avif;`
  return (
    <div>
      <Navbar1 home={{borderBottom:'3px solid red'}}/>
      <div class='cover'>
        <div class='banner d-flex justify-content-center align-items-center text-center'>
          <br />
          <br />
          <Container>
            Connecting People
            <br />
            to Loving God
            <br />
            <Button variant="danger" size="sm">
              About Us
            </Button>
          </Container>
        </div>
      </div>
      <br />
       <Container id="tv">
        <div className="d-flex align-items-center justify-content-center">
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
      <br/>
      <div class='banner1 align-items-center text-center'>
       <br/>
       <h3>Upcoming Programs</h3>
       <br/>
       <Container>
      <Row> 
      <Col xs={12} md={4}> 
      <Card  className="bg-dark w-65 h-65">
      <Card.Img variant="top" src={`${imageUrl1}?v=${Date.now()}`} />
      <Card.Body>
        <Card.Title className="fs-5">Card Title</Card.Title>
        <Card.Text style={{ fontSize: "15px" }} className="text-white">
          Upcoming program
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card  className="bg-dark">
      <Card.Img variant="top" src={`${imageUrl2}?v=${Date.now()}`}/>
      <Card.Body className="bg-dark">
        <Card.Title className="fs-5">Card Title</Card.Title>
        <Card.Text style={{ fontSize: "15px" }} className="text-white">
          Upcoming program
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card  className="bg-dark">
      <div>
        <Card.Img src={`${imageUrl3}?v=${Date.now()}`} />
      </div>
      <Card.Body className="bg-dark">
        <Card.Title className="fs-5">Card Title</Card.Title>
        <Card.Text style={{ fontSize: "15px" }} className="text-white">
          Upcoming program
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
      </div>
       <br/>
    <br/>
     <br/>
    <br/>
    <br/>
        <div>
          <Container>
          <Row className="justify-content-center">
            <Col md={4}>          
           <font id="h21">PASTOR
            <br/>
           <font className='' style={{fontSize:"19px"}}>MRS HELEN DOZIE</font>
            </font>  
              <br/>
              <div className="border-bottom border-2 border-danger" style={{width:"10%"}} ></div>  
              <br/>
               <p id='p1'style={{width:"100%"}}>We are a church that believes in Jesus, a church that loves God and people. Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for 
                authentic worship, are passionate about the church, and are on
                mission to see God’s kingdom established across the earth. </p>         
            </Col>
            <Col md={4}>
              <img className='img1' src={pastor} style={{width:"300px",height:"400px"}}></img>
            </Col>
          </Row>   
          </Container>
        </div>
         <br/>
        <br/>
        <br/>
        

    <br/>
  </div>
  );
}
export default Home;
















