import React from "react";
import "./IndividualResult.css";
import Rivers from "../../images/rivers.jpg";
import Beaches from "../../images/beaches.jpg";
import FoodAndDrinks from "../../images/foodAndDrinks.jpg";
import Server from '../../services/serverRoutes';
import { Modal, Button } from "react-bootstrap";
import { getUserEmail, isLogged } from "../../services/authentication";

var guides = [];
class IndividualResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourName: "",
      userUID: " ",
      guides,
      tid: this.props.singleEvent.tour_tid,
      change: false,
      message: "",
      userEmail: getUserEmail(),
      isLogged: isLogged(),
      popup: false
    }
    this.renderImage = this.renderImage.bind(this);
    this.addTourToList = this.addTourToList.bind(this);
  }

  async addTourToList() {
    await Server.addTourToList(this.state.tid, this.state.userUID).then((response) => {
        this.setState({
          message: response.message,
          popup: true
        })
    })
  }
  handleClose = () => this.setState({ popup: false });
  async componentDidMount() {
    if(this.state.isLogged){
      await Server.getUser(this.state.userEmail).then((userInfo) => {
        this.setState({
          userUID: userInfo.user.uid
        })
      })
    }
    await Server.getTourInfo(this.props.singleEvent.tour_tid).then(async (tour) => {
      this.setState({
        tourName: tour.tourInfo.tour_name
      })
      await Server.getTourGuides(tour.tourInfo.guide_company_coid, this.props.singleEvent.tour_tid).then((fetchedGuides) => {
        this.setState({
          guides: fetchedGuides.tourGuides,
          change: true
        })
      });
    })
  }

  componentDidUpdate(nextState) {
    if (nextState.change != this.state.change) {
      this.render();
    }
  }
  renderImage() {
    const currType = this.props.singleEvent.type;
    if (currType === "Food and Drinks" || currType === "Food" || currType === "Drinks") {
      return <img src={FoodAndDrinks} width="225" alt="foodNdrinks" />;
    } else if (currType === "Rivers") {
      return <img src={Rivers} width="225" alt="foodNdrinks" />;
    } else if (currType === "Beaches") {
      return <img src={Beaches} width="225" alt="foodNdrinks" />;
    } else {
      return <div>No Image For This Category</div>;
    }
  }

  render() {
    let addButton;
    if(this.state.isLogged){
      addButton = <button
                  type="button"
                  className="searchButton"
                  onClick={this.addTourToList}
                >
                      Add
                  </button>
    }
    return (

      <div className="IndividualResult">
        <div className="info">
          <>
            <Modal show={this.state.popup} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Message</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.state.message}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
          <div className="type">{this.props.singleEvent.type}</div>
          <div className="name">{this.props.singleEvent.name}</div>
          <div className="details">
            <div className="location">Location: {this.props.singleEvent.location_city}</div>
            <div className="duration">Duration: {this.props.singleEvent.duration}</div>
            <div className="duration">Part of the tour: {this.state.tourName}</div>
            <div className="guides">
              Number of Guides: {this.state.guides.length}
            </div>
          </div>
        </div>
        <div className="image">{this.renderImage()}</div>
        {addButton}
      </div>
    );
  }
}

export default IndividualResults;
