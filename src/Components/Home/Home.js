import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";

class Home extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        results: [],
      };
  
      this.search = this.search.bind(this);
    }
  
    search() {
      this.setState({
        results: [
          {
            name: "Rincon Beach Adventure",
            location: "Rincon, PR",
            type: "Beaches",
            guides: ["Sandra", "Diego"],
            duration: "3hr/s",
            meetingPlace:
              "The light house, right at the stairs of the main entrance",
            meetingTime: "12:00pm",
            price: "$40 per person",
            reviews: [{ author: "Arnaldo", stars: "5", comments: "" }],
            id: 1,
          },
          {
            name: "Beer Tour",
            location: "Rincon, PR",
            type: "Food and Drinks",
            guides: ["Walter"],
            duration: "2.5hr/s",
            meetingPlace: "Rincon Beer Company at the Rincon Plaza",
            meetingTime: "7:00pm",
            price: "$15 per person",
            reviews: [
              { author: "John", stars: "5", comments: "" },
              {
                author: "Wanda",
                stars: "5",
                comments: "Definitely recommend !!",
              },
            ],
            id: 2,
          },
          {
            name: "River Adventure",
            location: "Rincon, PR",
            type: "Rivers",
            guides: ["Joanna", "Mike"],
            duration: "4.5hr/s",
            meetingPlace: "Rincon Light House, by the main entrance",
            meetingTime: "9:00am",
            price: "$25 per person",
            reviews: [
              { author: "Jacobo", stars: "5", comments: "Great Guides!" },
              { author: "Ari", stars: "5", comments: "" },
            ],
            id: 3,
          },
        ],
      });
    }
  
    render() {
      return (
        <div className="Home">
          <Nav /> 
          <Search search={this.search} />
          <SearchResults results={this.state.results} />
        </div>
      );
    }
  }
  
  export default Home;