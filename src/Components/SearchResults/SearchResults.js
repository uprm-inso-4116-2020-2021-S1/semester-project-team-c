import React from "react";
import "./SearchResults.css";
import IndividualResult from "./../IndividualResult/IndividualResult";

var guides = [];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.showResults = this.showResults.bind(this);
  }

  


  showResults() {
    if (this.props.results.length == 0) {
      return (
        <h1> No events to show </h1>
      )
    }
    if (this.props.results.length > 0) {
      return (
        <div className="Container">
          {this.props.results.map((event) => {
            return (
              <IndividualResult
                singleEvent = {event}
               
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

export default SearchResults;
