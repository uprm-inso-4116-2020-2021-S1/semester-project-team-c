import React from "react";
import "./SearchResults.css";

var guides = [];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.showResults = this.showResults.bind(this);
    console.log(this.props.results)
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
