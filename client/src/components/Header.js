import { Link } from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap'
import logo from '../assets/logo.png'

function Header() {
    return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo' className="header_logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_bar">
            <Nav.Link as={Link} to="/" className ="nav-item">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className ="nav-item">OUR STORY</Nav.Link>
            <Nav.Link as={Link} to="/menu" className ="nav-item">MENU</Nav.Link>
            <Nav.Link as={Link} to="/reservation" className ="nav-item">RESERVATION</Nav.Link>
            <Nav.Link as={Link} to="/orderonline" className ="nav-item">ORDER ONLINE</Nav.Link>
            <Nav.Link as ={Link} to= "/login" className ="nav-item">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;