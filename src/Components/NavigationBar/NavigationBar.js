import React from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../../images/ExplorePRLogo.png";
import { Redirect } from 'react-router-dom'
import { getUserEmail, logout, isLogged } from "../../services/authentication";


class NavigationBar extends React.Component {


  constructor(props) {
    super(props);
  
    this.state = {
      logged: isLogged(),
      userEmail: getUserEmail()
    }
  }

  handleLogout = () => {
    logout();
    this.setState({
      logged: isLogged()
    })
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextState.logged != this.state.logged) {
      this.render();
    }
  }
  render() {
    let { logged } = this.state;
    console.log(this.state.userEmail)
    if (logged) {
      return (
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand href="/"><img className="Logo" src={Logo} alt="Logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/meetourguides">Meet our Guides</Nav.Link>
              <Nav.Link href="/createguideaccount">Become a Guide</Nav.Link>
              <Nav.Link href="/tours">Tours</Nav.Link>
              <Nav.Link href={"/profile/" + this.state.userEmail}>Profile</Nav.Link>
              <Nav.Link onClick={this.handleLogout} href="/login">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    else {
      return (
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand href="/"><img className="Logo" src={Logo} alt="Logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/meetourguides">Meet our Guides</Nav.Link>
              <Nav.Link href="/createguideaccount">Become a Guide</Nav.Link>
              <Nav.Link href="/tours">Tours</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }

  }
}

export default NavigationBar;