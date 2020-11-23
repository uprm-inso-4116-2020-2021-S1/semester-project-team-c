import React from "react";
import "./Profile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import Nav from "../NavigationBar/NavigationBar";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import GuideProfile from "../GuideProfile/GuideProfile";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                {
                  name: "Rincon Beach Adventure",
                  location: "Rincon, PR",
                  type: "Beaches",
                  guides: ["Sandra", "Diego"],
                  duration: "3hr/s",
                  meetingPlace:
                    "The light house, right at the stairs of the main entrance",
                  meetingTime: "12:00pm",
                  price: "$40 per person",
                  reviews: [{ author: "Arnaldo", stars: "5", comments: "" }],
                  id: 1,
                },
              ],
        };
    }

  render() {
    return <div>
        <Nav />
        <div className="profileBody">
            {/* <CustomerProfile results={this.state.results}/> */}
            <GuideProfile results={this.state.results}/>
        </div>
    </div>;
  }
}

export default Profile;
