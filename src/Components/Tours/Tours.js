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
            change: false
        };

        this.search = this.search.bind(this);
    }

    async search(city) {
        this.setState({
            change:false
        })
        await Server.getEventByCity(city).then((fetchedEvents) => {
          this.setState({
            results: fetchedEvents.event,
            change: true
          })
        });
      }
    componentDidUpdate(nextState){
        if(nextState.change != this.state.change){
            this.render();
        }
    }
    render(){
        console.log(this.props)
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