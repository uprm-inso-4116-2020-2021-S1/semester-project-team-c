import React from "react";
import "./SearchResults.css";
import IndividualResult from "./../IndividualResult/IndividualResult";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.showResults = this.showResults.bind(this);
  }

  showResults() {
    if (this.props.results.length > 0) {
      return (
        <div className="Container">
          {this.props.results.map((event) => {
            return (
              <IndividualResult
                name={event.name}
                type={event.type}
                location={event.location}
                duration={event.duration}
                guides={event.guides}
                key={event.id}
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
