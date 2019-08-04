import React from 'react';
import '../style/page-header.scss';
import Particles from 'react-particles-js';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Modal,InputGroup } from 'react-bootstrap';


const Bar: React.FC = () => {

  return (
    <div className="nav-bar">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            {/*<Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        </Nav>
        <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Bar;
