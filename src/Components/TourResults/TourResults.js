import React from "react";
import IndividualTour from "../individualTour/individualTour";
import Server from "../../services/serverRoutes";

var guides = [];

class TourResults extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.results)
    this.showResults = this.showResults.bind(this);
    
  }

  


  showResults() {
    if (this.props.results.length == 0) {
      return (
        <h1> No Tours to show </h1>
      )
    }
    if (this.props.results.length > 0) {
      return (
        <div className="Container">
          {this.props.results.map((tour) => {
            return (
              <IndividualTour
                results={tour}
              />
            );
          })}
        </div>
      );
    }
  }

  render() {
    return <div>{this.showResults()}</div>;
  }
}

export default TourResults;
