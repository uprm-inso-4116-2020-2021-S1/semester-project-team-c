import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

class Search extends React.Component {
  render() {
    return (
      <div className="SearchBox">
        <FaSearch className="searchIcon" />
        <input
          type="text"
          id="search"
          placeholder="search by attraction or location..."
        />
        <button
          type="button"
          className="searchButton"
          onClick={this.props.search}
        >
          Enter
        </button>
      </div>
    );
  }
}

export default Search;
