import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import fi from '../../Images/Components/Fi.png';
import './Serve.css';

function Serve() {
  return (
      <div>
      <Navbar1 serve={{ borderBottom: '3px solid red' }} />
       <div class='serve_banner d-flex justify-content-center align-items-center text-center'>
        <br />
        <br />
        <Container>
          <font className='text-warning fs-1'>SER</font><font className='text-white fs-1'>VE</font>
          <br />
          <img src={fi} style={{ width: "150px" }}></img>
          <br />
          <font className='text-white fs-6'><Link to="#" className='text-primary'>Home</Link> /Serve</font>
        </Container>
      </div>
      <br/>
      <br/>
        <Container id="tv">
        <Row>
        <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>                   
              <Card.Title> 
                Ushering Department. </Card.Title>
              <Card.Text>
                We are delighted to have you as part of this ministry. The ushering team 
                plays an important role in welcoming people into God’s presence. 
                They greet worshippers, help them find seats, and ensure the service runs smoothly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title> Choir / Music Team </Card.Title>
               <Card.Text>
                We are delighted to have you as part of this ministry. 
                The worship team leads the congregation in praise and worship,
                 creating an atmosphere where people can connect with God through music and song.
                </Card.Text>    
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title> Media / Technical Team  </Card.Title>
              <Card.Text>
              We are delighted to have you as part of this ministry. 
              The media team helps operate sound systems, cameras, and presentations
               to ensure the message of the service reaches everyone clearly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
         <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title> Children’s Ministry </Card.Title>
              <Card.Text>
                 We are delighted to have you as part of this ministry. 
                 The children’s ministry helps teach and guide children in the ways of God,
                  helping them grow spiritually through lessons, activities, and love.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
         <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title> Youth Ministry </Card.Title>
              <Card.Text>
               We are delighted to have you as part of this ministry. 
               The youth ministry mentors and guides young people,
                helping them grow in faith and develop a strong relationship with God.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
         <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title> Prayer / Intercession Team </Card.Title>
              <Card.Text>
                We are delighted to have you as part of this ministry. 
                The prayer team intercedes for the church, its members, and the community,
                 believing God for spiritual growth and transformation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
         <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title> Evangelism / Outreach Team </Card.Title>
              <Card.Text>
                We are delighted to have you as part of this ministry. 
                The outreach team spreads the gospel and invites others
                 to experience God’s love through church programs and community activities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
           <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title> Hospitality Team </Card.Title>
              <Card.Text>
                We are delighted to have you as part of this ministry.
                The hospitality team helps create a warm and friendly environment for visitors
                and members, making everyone feel welcomed and cared for.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
         <Col md={4}>
          <Card bg="bg-white" text="black" className="card-font mb-4">
            <Card.Body>
              <Card.Title>Sanctuary / Cleaning Team </Card.Title>
              <Card.Text>
                  We are delighted to have you as part of this ministry. 
                  This team ensures the church environment is clean,
                   organized, and prepared for worship services and events.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
   </Container>
    </div>
  )
}
export default Serve
    