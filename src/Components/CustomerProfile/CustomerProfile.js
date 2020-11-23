import React from "react";
import "./CustomerProfile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import SearchResults from "../SearchResults/SearchResults";
import Avatar from "../../images/avatar.png";

class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.showResults = this.showResults.bind(this);
  }

//   showResults() {
//       return (
//         <div className="Container">
//           <h1>DIMELO</h1>
//         </div>
//       );
//   }

  render() {
    return (
    <div className="customerWrapper">
        <div className="customerContainer">
            <div className="customerLeft">
                <img src={Avatar} className="avatarImg"></img>
                <p className="customerName">Gabriel Rivera</p>
                <p className="userEmail">gabs_riverap97@gmail.com</p>
            </div>
            <div className="customerRight">
                <div className="rightHeader">
                    <h3>My Tours</h3>
                </div>
                <SearchResults results={this.props.results}/>
            </div>
        </div>
    </div>
    );
  }
}

export default CustomerProfile;
