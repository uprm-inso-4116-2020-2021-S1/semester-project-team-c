import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="navButton">
        <h2>ExplorePR</h2>
      </Link>
      <ul>
        {/* <li>Become a Guide</li> */}
        <button
          type="text"
          className="navButton"
        >
          Become a Guide
        </button>
        <Link to="/login" className="navButton">
          Log In
        </Link>
        {/* <li>Account</li> */}
      </ul>
    </div>
  );
}

export default Nav;
