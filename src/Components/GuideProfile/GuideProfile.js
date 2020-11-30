import React from "react";
import "./GuideProfile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import Avatar from "../../images/avatar.png";
import SearchResults from "../SearchResults/SearchResults";
import { withRouter } from "react-router-dom";
import Server from '../../services/serverRoutes';
import {Link }from 'react-router-dom';

var data;

class GuideProfile extends React.Component {

  constructor(props) {
    super(props);
    data = this.props.data;
    this.state = {
      email: data.email,
      uid: data.uid,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      description: "",
      facebook: "",
      twitter: "",
      youtube: "",
      instagram: ""
    }
  }

  async componentDidMount() {
    await Server.getGuide(this.state.uid).then(guide => {
      if (guide) {
        this.setState({
            firstName: guide.guide_info.firstName,
            lastName: guide.guide_info.lastName,
            phoneNumber: guide.guide_info.phoneNumber,
            description: guide.guide_info.description,
            facebook: guide.guide_info.facebook,
            twitter: guide.guide_info.twitter,
            youtube: guide.guide_info.youtube,
            instagram: guide.guide_info.instagram
        });

      }
    }).catch(err => console.error(err));
  }
  render() {
    let { email, firstName, lastName, phoneNumber, description, facebook, twitter, youtube, instagram } = this.state;
    return (
      <div className="customerWrapper">
        <div className="customerContainer">
          <div className="customerLeft">
            <img src={Avatar} className="avatarImg"></img>
            <p className="customerName">{firstName} {lastName}</p>
            <p className="userEmail">{email}</p>
            <p className="userPhone">{phoneNumber}</p>
            <p className="userDescription">{description}</p>
            <p className="userFacebook">{facebook}</p>
          </div>
          <div className="customerRight">
            <div className="rightHeader">
              <h3>My Tours</h3>  
              <Link to="/createtour">   
                <button type="button" className="tourButton">Add Tour</button>
              </Link>    
            </div>
            {/* <SearchResults results={ } /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default GuideProfile;
