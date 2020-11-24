import React from "react";
import "./GuideProfile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import Avatar from "../../images/avatar.png";
import SearchResults from "../SearchResults/SearchResults";
import Server from "../../services/serverRoutes";
import { Redirect, withRouter } from "react-router-dom";

var email = "";

class GuideProfile extends React.Component {
  
  constructor(props) {
    super(props);
    email = this.props.match.params.email;
    this.state = {
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
    await Server.getGuide(email).then(guide => {
      if(guide){
        this.setState({
          firstName: guide.guide_info.firstName,
          lastName: guide.guide_info.lastName,
          phoneNumber: guide.guide_info.phoneNumber,
          description: guide.guide_info.description,
          facebook: guide.guide_info.facebook,
          twitter: guide.guide_info.twitter,
          youtube: guide.guide_info.youtube,
          instagram: guide.guide_info.instagram
  
        })
      }
    }).catch(err => console.error(err));;
  }
  render() {
    let { firstName, lastName, phoneNumber, description, facebook, twitter, youtube, instagram } = this.state;
    return (
      <div className="customerWrapper">
        <div className="customerContainer">
          <div className="customerLeft">
            <img src={Avatar} className="avatarImg"></img>
            <p className="customerName">{firstName} {lastName}</p>
            <p className="userEmail">{this.props.email}</p>
            <p className="userPhone">{phoneNumber}</p>
            <p className="userDescription">{description}</p>
            <p className="userFacebook">{facebook}</p>
          </div>
          <div className="customerRight">
            <div className="rightHeader">
              <h3>My Tours</h3>
              <button type="button" className="tourButton">Add Tour</button>
            </div>
            {/* <SearchResults results={ } /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GuideProfile);
