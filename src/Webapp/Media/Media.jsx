import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../../Components/Navbar/Navbar";
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import fi from '../../Images/Components/Fi.png';
import './Media.css';

function Media() {
  return (
      <div>
      <Navbar1 media={{ borderBottom: '3px solid red' }} />
       <div class='serve_banner d-flex justify-content-center align-items-center text-center'>
        <br />
        <br />
        <Container>
          <font className='text-warning fs-1'>ME</font><font className='text-white fs-1'>DIA</font>
          <br />
          <img src={fi} style={{ width: "150px" }}></img>
          <br />
          <font className='text-white fs-6'><Link to="#" className='text-primary'>Home</Link> /Media</font>
        </Container>
      </div>
      <br/>
      <br/>
        <Container id="tv">
       
      <br/>
   </Container>
    </div>
  )
}
export default Media
    