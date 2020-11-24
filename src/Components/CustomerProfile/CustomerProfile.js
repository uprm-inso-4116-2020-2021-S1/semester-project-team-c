import React from "react";
import "./CustomerProfile.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import SearchResults from "../SearchResults/SearchResults";
import Avatar from "../../images/avatar.png";
import { withRouter } from "react-router-dom";
import Server from '../../services/serverRoutes';

var data;

class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);
    
    data = this.props.data;
    this.state = {
      email: data.email,
      uid: data.uid,
      firstName: "",
      lastName: ""
    }
  }

  async componentDidMount() {
    await Server.getCustomer(this.state.uid).then(customer => {
      if (customer) {
        this.setState({
            firstName: customer.customer_info.firstName,
            lastName: customer.customer_info.lastName
        })
      }
    }).catch(err => console.error(err));
  }
  render() {
    let { email, firstName, lastName } = this.state;
    return (
    <div className="customerWrapper">
        <div className="customerContainer">
            <div className="customerLeft">
                <img src={Avatar} className="avatarImg"></img>
                <p className="customerName">{firstName} {lastName}</p>
                <p className="userEmail">{email}</p>
            </div>
            <div className="customerRight">
                <div className="rightHeader">
                    <h3>My Tours</h3>
                </div>
                {/* <SearchResults results={this.props.results}/> */}
            </div>
        </div>
    </div>
    );
  }
}

export default CustomerProfile;
