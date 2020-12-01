import React from "react";
import "./IndividualResult.css";
import Rivers from "../../images/rivers.jpg";
import Beaches from "../../images/beaches.jpg";
import FoodAndDrinks from "../../images/foodAndDrinks.jpg";
import Server from '../../services/serverRoutes';

var guides = [];
class IndividualResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourName: "",
      guides,
      change: false
    }
    this.renderImage = this.renderImage.bind(this);
  }


  async componentDidMount() {
    await Server.getTourInfo(this.props.singleEvent.tour_tid).then( async (tour) => {
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

  componentDidUpdate(nextState){
    if(nextState.change != this.state.change){
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
    return (
      
      <div className="IndividualResult">
        <div className="info">
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
      </div>
    );
  }
}

export default IndividualResults;
