import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container,Nav,Navbar,Row, Col } from "react-bootstrap";
import Logo from "../../Images/Components/Navbar/four.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import "./Navbar.css";




function Navbar1(){
 return(
      <div>
    <Navbar bg="" variant="" expand="lg" className='navcolor'>
      <Container>
        <Navbar.Brand>
        <font id='heading1'><img src={Logo} className='church-logo'/>Foursquare</font>
       </Navbar.Brand>
        {/* Toggle button (hamburger) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white',backgroundColor:'white'}} />
        {/* Collapsible content */}
         <Container className="d-flex justify-content-end">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlink1">
            <Nav.Link href="#" className='mx-3' >HOME</Nav.Link>
            <Nav.Link href="#" className='mx-3'>ABOUT US</Nav.Link>
             <Nav.Link href="#"  className='mx-3'>SERVE</Nav.Link>
              <Nav.Link href="#"  className='mx-3'>MEDIA</Nav.Link>
            <Nav.Link src="#"  className='mx-3'>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Container>
      </Container>
    </Navbar>
   </div>

);
}
export default Navbar1;