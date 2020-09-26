import React from "react";
import "./SearchResults.css";
import IndividualResult from "./../IndividualResult/IndividualResult";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Container">
        {this.props.results.events.map((event) => {
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

export default SearchResults;
