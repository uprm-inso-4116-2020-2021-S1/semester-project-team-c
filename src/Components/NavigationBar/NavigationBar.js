import React from "react";
import "./NavigationBar.css";
import {Navbar, Nav} from 'react-bootstrap';
import Logo from "../../images/ExplorePRLogo.png";

function NavigationBar() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="/"><img className="Logo" src={Logo} alt="Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/meetourguides">Meet our Guides</Nav.Link>
            <Nav.Link href="/createaccount">Become a Guide</Nav.Link>
            <Nav.Link href="/tours">Tours</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavigationBar;