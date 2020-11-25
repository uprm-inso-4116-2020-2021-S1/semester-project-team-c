import React from "react";
import "./Profile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import Nav from "../NavigationBar/NavigationBar";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import GuideProfile from "../GuideProfile/GuideProfile";
import { withRouter } from "react-router-dom";
import Server from '../../services/serverRoutes';

var url_email = "";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    url_email = this.props.match.params.email;
    this.state = {
      data: {},
      isGuide: false,
      isRendered: false
    }

  }

  async componentDidMount() {
    const response = await Server.getUser(url_email);
    const user_data = response.user;
    const role = user_data.role;
    if (role == 1) {
      this.setState({
        data: {
          uid: user_data.uid,
          email: url_email
        },
        isGuide: true,
        isRendered: true
    });
    } else if (role == 0) {
      this.setState({
        data: {
          uid: user_data.uid,
          email: url_email
        },
        isGuide: false,
        isRendered: true
      });
    }
  }




  render() {
    let { data, isGuide, isRendered } = this.state;
    let profile;
    if (isGuide && isRendered) {
      profile = <GuideProfile data={data} />
    } else if (!isGuide && isRendered) {
      profile = <CustomerProfile data={data} />
    }
    return (
      <div>
        <Nav />
        <div className="profileBody">
          {profile}
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
