import "./Tours.css";
import React from "react";
import Nav from "../NavigationBar/NavigationBar";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import Server from "../../services/serverRoutes";

class Tours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };

        this.search = this.search.bind(this);
    }

    async search() {
        await Server.getEventByCity().then((fetchedEvents) => {
          this.setState({
            results: fetchedEvents.event
          })
        });
      }

    render(){
        return (
            <div className="TourDiv">
                <Nav />
                <h2 className="TourHeading">Start Exploring.</h2>
                <Search search={this.search} />
                <SearchResults results={this.state.results} />
            </div>
        );
    }
}

export default Tours;