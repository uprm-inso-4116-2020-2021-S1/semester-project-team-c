import React from "react";
import IndividualResult from "../IndividualResult/IndividualResult";
import Server from "../../services/serverRoutes";

var guides = [];

class TourResults extends React.Component {
  constructor(props) {
    super(props);
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
              <TourResults
                name={tour.tour_name}
                tid={tour.tid}
                coid={tour.guide_company_coid}
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
