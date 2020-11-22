import React, { component } from "react";
import "./CustomerProfile.css";
import Nav from "../NavigationBar/NavigationBar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Tongo from "../../images/ProfileTongo.jpg"
import FacebookIcon from "../../images/FacebookIcon.png"
import InstagramIcon from "../../images/InstagramIcon.png"
import TwitterIcon from "../../images/TwitterIcon.png"
import YoutubeIcon from "../../images/YoutubeIcon.png"
// import { isLogged, logout } from "../../services/authentication";


// const user = isLogged();

export default class UserProfile extends React.Component {

  // constructor(props) {
  //   super(props);
  // };

  // handleLogout = () => {
  //   console.log(user);
  //   logout();
  //   this.props.history.push('/login');
  // }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <div>
          <Image className="picDim d-block" src={Tongo} roundedCircle />
          <h1 className="Name">Name LastName</h1>
          <h1 className="companyName">Company Name</h1>
          <div className="HeaderDiv">
            <a href="/createaccount">Create Event</a>
          </div>
          {/* <input type="button" onClick={this.handleLogout} value="Logout" />  */}
          <Row className="justify-content-md-center">
            <Col sm={1} className="iconColPadding">
              <a href="https://www.facebook.com/Tongo_PR-1491833804253503">
                <Image className="picDim d-block mx-auto Icon" src={FacebookIcon} />
              </a>
            </Col>
            <Col sm={1} className="iconColPadding"><a href="https://www.instagram.com/tongo_pr/"><Image className="picDim d-block mx-auto Icon" src={InstagramIcon} /></a></Col>
            <Col sm={1} className="iconColPadding"><a href="https://twitter.com/tito824"><Image className="picDim d-block mx-auto Icon" src={TwitterIcon} /></a></Col>
            <Col sm={1} className="iconColPadding"><a href="https://www.youtube.com/channel/UCUHL6ynG35dZQAbrNfuLKAw"><Image className="picDim d-block mx-auto Icon" src={YoutubeIcon} /></a></Col>
          </Row>


        </div>




      </React.Fragment>
    );
  }


}