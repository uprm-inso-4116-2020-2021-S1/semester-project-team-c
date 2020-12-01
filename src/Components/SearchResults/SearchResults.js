import React from "react";
import "./SearchResults.css";
import IndividualResult from "./../IndividualResult/IndividualResult";
import Server from "../../services/serverRoutes";

var guides = [];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.showResults = this.showResults.bind(this);
  }

  


  showResults() {
    var eventFromTour = this.props.results;
    if (eventFromTour.length == 0) {
      return (
        <h1> No events to show </h1>
      )
    }
    if (eventFromTour.length > 0) {
      return (
        <div className="Container">
          {this.props.results.map((event) => {
            console.log(event)
            // return (
            //   <IndividualResult
            //     name={event.name}
            //     type={event.type}
            //     location={event.location}
            //     duration={event.duration}
            //     key={event.eid}
            //     tid={event.tid}
            //   />
            // );
          })}
        </div>
      );
    }
  }

  render() {
    return <div>{this.showResults()}</div>;
  }
}

export default SearchResults;
