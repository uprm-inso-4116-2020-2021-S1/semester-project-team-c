import React from "react";
import "./GuideProfile.css";
import Avatar from "../../images/avatar.png";
import TourResults from "../TourResults/TourResults";
import Server from '../../services/serverRoutes';
import { Link } from 'react-router-dom';
import { getUserEmail } from "../../services/authentication";

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
      instagram: "",
      tours: {},
      fetched: false,
      owner: false
    }
  }

  async componentDidMount() {
    if (this.state.email == getUserEmail()) {
      this.setState({
        owner: true
      })
    }
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

    await Server.getUserTours(this.state.uid).then((tourList) => {
      this.setState({
        tours: tourList.allTours,
        fetched: true
      });
    }).catch(err => console.error(err));
  }

  componentDidUpdate(nextState) {
    if (nextState.fetched != this.state.fetched) {
      this.render();
    }
    if (nextState.owner != this.state.owner) {
      this.render();
    }
  }

  render() {
    let { email, firstName, lastName, phoneNumber, description, facebook, twitter, youtube, instagram, tours, owner } = this.state;
    let addButton;
    if (owner) {
      addButton = <Link to="/createtour">
                      <button type="button" className="tourButton">Add Tour</button>
                  </Link>
    }
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
              {addButton}
            </div>
            <TourResults results={tours} />
          </div>
        </div>
      </div>
    );
  }
}

export default GuideProfile;
