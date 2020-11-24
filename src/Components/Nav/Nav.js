import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { getUserEmail } from "../../services/authentication";

const userEmail = getUserEmail();

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="navButton">
        <h2>ExplorePR</h2>
      </Link>
      <ul>
        {/* <li>Become a Guide</li> */}
        <Link to="/createaccount" className="navButton">
          <li>Create Account</li>
        </Link>
        <Link to='/profile/${this.userEmail}'>
          <li>Profile</li>
        </Link>
        <Link to="/login" className="navButton">
          <li>Log In</li>
        </Link>
        
        {/* <li>Account</li> */}
      </ul>
    </div>
  );
}

export default Nav;
