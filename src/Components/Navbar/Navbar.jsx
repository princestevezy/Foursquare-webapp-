import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar} from "react-bootstrap";
import Logo from "../../Images/Components/Navbar/four.png";
import { Link } from "react-router-dom";
import "./Navbar.css";




function Navbar1(active){
 return(
    <div>
    <Navbar bg="bg-light" variant="light" expand="lg" className='navcolor'>
      <Container>
        <Navbar.Brand>
        <font id='heading1'><img src={Logo} className='church-logo'/>SALVATION CHAPEL</font>
       </Navbar.Brand>
        {/* Toggle button (hamburger) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white',backgroundColor:'white'}} />
        {/* Collapsible content */}
         <Container className="d-flex justify-content-end">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='mx-3 navlink1'   style={active.home}>HOME</Link>
            <Link to="/about" className='mx-3 navlink1'  style={active.about}> ABOUT US</Link>
             <Link to="/serve"  className='mx-3 navlink1'  style={active.serve}>SERVE</Link>
              <Link to="/media"  className='mx-3 navlink1'  style={active.media}>MEDIA</Link>
            <Link to="/contactus"  className='mx-3 navlink1'  style={active.contact}>CONTACT US</Link>
          </Nav>
        </Navbar.Collapse>
       </Container>
      </Container>
    </Navbar>
   </div>
);
}
export default Navbar1;





