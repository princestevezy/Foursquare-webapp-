import React from "react";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import four1 from '../../Images/Images/Home/r.jpg';
import pastor from '../../Images/Images/Home/p.jpg';
import t_c from '../../Images/Images/Home/c.jpg';
import sb from '../../Images/Images/Home/sb.jpg';
import sm from '../../Images/Images/Home/sm.png';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../../Components/Footer/Footer";
import './Home.css';


function Home() {
  const imageUrl1 = `https://res.cloudinary.com/dgsarpq5w/image/upload/image1_jhiyzw;`
  const imageUrl2 = `https://res.cloudinary.com/dgsarpq5w/image/upload/image2_as5094.avif;`
  const imageUrl3 = `https://res.cloudinary.com/dgsarpq5w/image/upload/image3_gt7dhs.avif;`
  return (
    <div>
      <Navbar1 home={{ borderBottom: '3px solid red' }} />
        <div class='banner d-flex justify-content-center align-items-center text-center'>
          <br />
          <br />
          <Container>
             FOURSQUARE GOSPEL CHURCH
              <br />
              NIGERIA
              <br />
          <font className='text-warning'>SALVATION CHAPEL</font>
            <br/>
            <Button variant="primary" size="lg" style={{ backgroundColor: "darkblue", border: "none" }}>
              About Us
            </Button>
          </Container>
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
              <br />
              <div className="border-bottom border-2 border-danger" style={{ width: "50%" }} ></div>
              <br />
              <p id='p1'>We are a church that believes in Jesus, a church that loves God and people.
                 Overwhelmed by the gift of salvation we have found in Jesus,
                 we have a heart for
                authentic worship, are passionate about the church, and are on
                mission to see God’s kingdom established across the earth. </p>
            </Col>
          </Row>
        </div>
        <br />
        <br />
      </Container>
      <br />
      <div class='banner1 align-items-center text-center'>
        <br />
        <h2><font class='text-warning'>Upcoming</font> <font class='text-white'>Events</font></h2>
        <br />
        <Container>
          <Carousel indicators={false} style={{ color: "red" }}>
            <Carousel.Item>
              <Row>
                <Col xs={12} md={4}>
                  <Card className="bg-dark mb-4">
                    <Card.Img variant="top" src={`${imageUrl1}?v=${Date.now()}`} />
                    <Card.Body>
                      <Card.Title className="fs-5 text-white"> Upcoming Event </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="bg-dark mb-4">
                    <Card.Img variant="top" src={`${imageUrl2}?v=${Date.now()}`} />
                    <Card.Body className="bg-dark">
                      <Card.Title className="fs-5 text-white"> Upcoming Event </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="bg-dark mb-4">
                    <div>
                      <Card.Img src={`${imageUrl3}?v=${Date.now()}`} />
                    </div>
                    <Card.Body className="bg-dark">
                      <Card.Title className="fs-5 text-white"> Upcoming Event </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col xs={12} md={4}>
                  <Card className="bg-dark mb-4">
                    <Card.Img variant="top" src={`${imageUrl1}?v=${Date.now()}`} />
                    <Card.Body>
                      <Card.Title className="fs-5 text-white"> Upcoming Event </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="bg-dark mb-4">
                    <Card.Img variant="top" src={`${imageUrl2}?v=${Date.now()}`} />
                    <Card.Body className="bg-dark">
                      <Card.Title className="fs-5 text-white"> Upcoming Event </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="bg-dark mb-4">
                    <div>
                      <Card.Img src={`${imageUrl3}?v=${Date.now()}`} />
                    </div>
                    <Card.Body className="bg-dark">
                      <Card.Title className="fs-5 text-white"> Upcoming Event </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <br />
      <br />
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
                <font className='pp' style={{ fontSize: "19px" }}>PASTOR MRS HELEN DOZIE</font>
            <br/>
              <div className="border-bottom border-2 border-danger" style={{ width: "10%" }} ></div>
              <br/>
              <p id='p1' style={{ width: "100%" }}>We are a church that believes in Jesus, a church that loves God and people. Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for
                authentic worship, are passionate about the church, and are on
                mission to see God’s kingdom established across the earth. </p>
            </Col>
             <Col md={4} className="d-flex justify-content-center align-items-center">
              <img  src={pastor} style={{width: "100%", height: "auto" }}></img>
            </Col>
          </Row>
        </Container>
      </div>
      <br/>
       <br/>
        <br/>
       <br/>
      <Container className="mb-8">
        <br />
        <h2 className="text-lg h mb-8">Our Mission</h2>
        <br />
        <Row>
          <Col xs={12} md={4}>
            <Card className="bg-white w-65 h-65 mb-4">
              <Card.Img variant="top" src={t_c} style={{ width: "100%", height: "200px" }} />
              <Card.Body>
                <Card.Title className="fs-5 text-black ct">Teach Children</Card.Title>
                <Card.Text style={{ fontSize: "15px" }} className="text-black" id='p1'>
                  To educate children biblical lessons in a caring and encouraging setting so they can comprehend God's Word,
                  develop spiritually, and form moral character based on Christian values.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="bg-white w-65 h-65 mb-4">
              <Card.Img variant="top" src={sb} style={{ width: "100%", height: "200px" }} />
              <Card.Body>
                <Card.Title className="fs-5 text-black ct">Study the Bible</Card.Title>
                <Card.Text style={{ fontSize: "15px" }} className="text-black" id='p1'>
                  To promote regular Bible study among adults, helping them gain knowledge of God’s Word,
                  strengthen their faith, and apply biblical principles in
                  their personal and spiritual lives.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="bg-white w-65 h-65 mb-4">
              <Card.Img variant="top" src={sm} style={{ width: "100%", height: "200px" }} />
              <Card.Body>
                <Card.Title className="fs-5 text-black ct"> Service and Ministry </Card.Title>
                <Card.Text style={{ fontSize: "15px" }} className="text-black" id='p1'>
                  To empower and inspire individuals to faithfully serve God by utilizing their spiritual
                  talents, abilities, and gifts to strengthen the church and have an impact on the community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    <Footer/>
    </div>
  );
}
export default Home;











