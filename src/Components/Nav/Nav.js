import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <Link to="/" className="navButton">
          <li className="navButton">Home</li>
        </Link>
        
        <Link className="navButton">
          <li className="navButton">About us</li>
        </Link>

        <Link to="/createaccount" className="navButton">
          <li className="navButton">Become a Guide</li>
        </Link>

        <Link className="navButton">
          <li className="navButton">Browse Tours</li>
        </Link>

        <Link to="/login" className="navButton">
          <li className="navButton">Log In</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
