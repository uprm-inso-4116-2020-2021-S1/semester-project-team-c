import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="SearchBox">
      <FaSearch className="searchIcon" />
      <input
        type="text"
        id="search"
        placeholder="search by attraction or location..."
      />
      <button type="button" className="searchButton">
        Enter
      </button>
    </div>
  );
}

export default Search;
