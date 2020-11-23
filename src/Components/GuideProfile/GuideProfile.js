import React from "react";
import "./GuideProfile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import Avatar from "../../images/avatar.png";
import SearchResults from "../SearchResults/SearchResults";

class GuideProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="customerWrapper">
        <div className="customerContainer">
            <div className="customerLeft">
                <img src={Avatar} className="avatarImg"></img>
                <p className="customerName">Mariela Castillo</p>
                <p className="userEmail">marie_castil@gmail.com</p>
                <p className="userPhone">787-644-7222</p>
                <p className="userDescription">I am dedicated to showing the beauty that PR has to offer!</p>
                <p className="userFacebook">@marieCasss</p>
            </div>
            <div className="customerRight">
                <div className="rightHeader">
                    <h3>My Tours</h3>
                    <button type="button" className="tourButton">Add Tour</button>
                </div>
                <SearchResults results={this.props.results}/>
            </div>
        </div>
    </div>
    );
  }
}

export default GuideProfile;
