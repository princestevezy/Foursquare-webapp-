import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import fi from '../../Images/Components/Fi.png';
import im1 from '../../Images/Images/Media/im1.jpg';
import im2 from '../../Images/Images/Media/im2.jpg';
import im3 from '../../Images/Images/Media/im3.jpg';
import im4 from '../../Images/Images/Media/im4.jpg';
import im5 from '../../Images/Images/Media/im5.jpg';
import im6 from '../../Images/Images/Media/im6.jpg';
import im7 from '../../Images/Images/Media/im7.jpg';
import im8 from '../../Images/Images/Media/im8.jpeg';
import im9 from '../../Images/Images/Media/im9.jpg';
import im10 from '../../Images/Images/Media/im10.jpg';
import im11 from '../../Images/Images/Media/im11.jpg';
import im12 from '../../Images/Images/Media/im12.jpg';
import im13 from '../../Images/Images/Media/im13.jpg';
import im14 from '../../Images/Images/Media/im14.jpeg';
import im15 from '../../Images/Images/Media/im15.jpg';
import im16 from '../../Images/Images/Media/im16.jpg';
import im17 from '../../Images/Images/Media/im17.jpg';
import im18 from '../../Images/Images/Media/im18.jpg';
import Footer from "../../Components/Footer/Footer";
import './Media.css';

function Media() {
  return (
    <div id="mission" >
      <Navbar1 media={{ borderBottom: '3px solid red' }} />
      <div class='media_banner d-flex justify-content-center align-items-center text-center'>
        <br />
        <br />
        <Container>
          <font className='text-warning fs-1'>MED</font><font className='text-white fs-1'>IA</font>
          <br />
          <img src={fi} style={{ width: "150px" }}></img>
          <br />
          <font className='text-white fs-6'><Link to="#" className='text-primary'>Home</Link> /Media</font>
        </Container>
      </div>
      <br />
      <br />
      <Container>
        <h1 id="h21" className="text-center"><font className='text-danger'>CHURCH </font><font>PICTURES</font></h1>
        <br />
        <div>
         <Row className="justify-content-center align-items-center">
            <Col md={4} className="text-center">
              <Card style={{ width: '100%', border: 'none' }} className="mb-4">
                <Card.Img src={im1} />
              </Card>
            </Col>
             <Col md={4} className="text-center">
              <Card style={{ width: '100%' }}>
                <Card.Img src={im2} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }}>
                <Card.Img src={im3} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%', border: 'none' }}>
                <Card.Img src={im4} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im5} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im6} />
              </Card>
            </Col>
          {/* Second batches images */}
            <Col md={4} className="text-center">
              <Card style={{ width: '100%', border: 'none' }} className="mb-4">
                <Card.Img src={im7} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }}>
                <Card.Img src={im8} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }}>
                <Card.Img src={im9} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%', border: 'none' }}>
                <Card.Img src={im10} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im11} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im12} />
              </Card>
            </Col>
              <Col md={4} className="text-center">
              <Card style={{ width: '100%', border: 'none' }}>
                <Card.Img src={im13} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im14} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im15} />
              </Card>
            </Col>
             <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im16} />
              </Card>
            </Col>
              <Col md={4} className="text-center">
              <Card style={{ width: '100%', border: 'none' }}>
                <Card.Img src={im17} />
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card style={{ width: '100%' }} className="mb-4">
                <Card.Img src={im18} />
              </Card>
            </Col>
            </Row>
        </div>
        <br />
        <br />
        <br />
       </Container>
       <Footer media={{ borderBottom: '3px solid red' }} />
      </div>
      
    
  )
}
export default Media
