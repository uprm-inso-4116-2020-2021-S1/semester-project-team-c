import React from "react";
import "./Profile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import Nav from "../NavigationBar/NavigationBar";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import GuideProfile from "../GuideProfile/GuideProfile";
import { useParams } from "react-router-dom";




class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email
        };
    }

  render() {
    return <div>
        <Nav />
        <div className="profileBody">
            {/* <CustomerProfile results={this.state.results}/> */}
            <GuideProfile user={this.state.email}/>
        </div>
    </div>;
  }
}

export default Profile;
