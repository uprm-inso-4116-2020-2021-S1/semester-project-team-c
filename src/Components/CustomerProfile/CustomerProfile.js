import React from "react";
import "./CustomerProfile.css";
import Avatar from "../../images/avatar.png";
import Server from '../../services/serverRoutes';
import TourResults from "../TourResults/TourResults";


var data;

class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);

    data = this.props.data;
    this.state = {
      email: data.email,
      uid: data.uid,
      firstName: "",
      lastName: "",
      fetched: false,
      tours: {}
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
  }
  render() {
    let { email, firstName, lastName, tours } = this.state;
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
            <TourResults results={tours} />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerProfile;
