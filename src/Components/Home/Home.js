import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import Crashboat from "../../images/crashboat.jpg"
import Gozalandia from "../../images/gozalandia.jpg"
import Yunque from "../../images/yunque.jpg"
import BahiaBioluminicente from "../../images/bahiaBioluminicente.jpg"
import Chinchorro from "../../images/chinchorro.jpg"
import ElMorro from "../../images/elMorro.jpg"
import Hiking from "../../images/hiking.jpg"
import Zipline from "../../images/zipline.jpg"

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
      <React.Fragment>
      <div className="TitleDiv">
        <Nav />
        <h1 className="Title">ExplorePR</h1>
        <h2 className="TitleDescription">Puerto Rico is full of hidden gems waiting for you to explore them.</h2>
        <Search search={this.search} />
        <SearchResults results={this.state.results} />
      </div>
      <div className="PlanAdventureDiv">
        <h1 className="PlanAdventureTitle">Plan your adventure</h1>
        <h2 className="PlanAdventureDescription">From beaches to a national forest, a bioluminescent lake, or hiking, in Puerto Rico you will find what suit you most. Plan your adventure along with our local tour guides to make the most of your stay.</h2>
        <img class="Crashboat" src={Crashboat} alt="Crashboat"></img>
        <img class="Gozalandia" src={Gozalandia} alt="Gozalandia"></img>
        <img class="Yunque" src={Yunque} alt="Yunque"></img>
        <img class="BahiaBioluminicente" src={BahiaBioluminicente} alt="Bahia Bioluminicente"></img>
        <img class="Chinchorro" src={Chinchorro} alt="Chinchorro"></img>
        <img class="ElMorro" src={ElMorro} alt="El morro"></img>
        <img class="Hiking" src={Hiking} alt="Hiking"></img>
        <img class="Zipline" src={Zipline} alt="Zipline"></img>
      </div>
      </React.Fragment>
    );
  }
}

export default Home;
