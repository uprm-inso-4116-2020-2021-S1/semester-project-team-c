import React from "react";
import "./IndividualResult.css";
import Rivers from "../../images/rivers.jpg";
import Beaches from "../../images/beaches.jpg";
import FoodAndDrinks from "../../images/foodAndDrinks.jpg";

class IndividualResults extends React.Component {
  constructor(props) {
    super(props);
    this.renderImage = this.renderImage.bind(this);
  }


  async getGuides(coid, tid) {
    Server.getTourGuides(coid, tid).then((fetchedGuides) => {
      guides.push(fetchedGuides.tourGuides)
    });
  }
  renderImage() {
    const currType = this.props.type;
    if (currType === "Food and Drinks") {
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
          <div className="type">{this.props.type}</div>
          <div className="name">{this.props.name}</div>
          <div className="details">
            <div className="location">Location: {this.props.location}</div>
            <div className="duration">Duration: {this.props.duration}</div>
            {/* <div className="guides">
              Number of Guides: {this.props.guides.length}
            </div> */}
          </div>
        </div>
        <div className="image">{this.renderImage()}</div>
      </div>
    );
  }
}

export default IndividualResults;
