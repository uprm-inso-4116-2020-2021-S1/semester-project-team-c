import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../../images/ExplorePRLogo.png"

function Nav() {
  return (
    <React.Fragment>
    <img class="Logo" src={Logo} alt="Logo"></img>
    <div className="nav">
      <ul>
        <Link to="/" className="navButton">
          <li className="navButton">Home</li>
        </Link>
        
        <Link className="navButton">
          <li className="navButton">About us</li>
        </Link>

        <Link to="/meetourguides" className="navButton">
          <li className="navButton">Meet our Guides</li>
        </Link>

        <Link to="/createaccount" className="navButton">
          <li className="navButton">Become a Guide</li>
        </Link>

        <Link to="/tours" className="navButton">
          <li className="navButton">Tours</li>
        </Link>

        <Link to="/login" className="navButton">
          <li className="navButton">Log In</li>
        </Link>
      </ul>
    </div>
    </React.Fragment>
  );
}

export default Nav;
