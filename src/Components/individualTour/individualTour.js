import React from "react";
import "./IndividualResult.css";
import Rivers from "../../images/rivers.jpg";
import Beaches from "../../images/beaches.jpg";
import FoodAndDrinks from "../../images/foodAndDrinks.jpg";
import Server from "../../services/serverRoutes";



class IndividualTour extends React.Component {
    constructor(props) {
        super(props);
        this.renderImage = this.renderImage.bind(this);
    }

    // async componentDidMount() {
    //     await Server.getTourEvents()
    // }

    render() {
        return (
            <div className="IndividualTour">
                <div className="info">
                    <div className="name">{this.props.tour_name}</div>
                    <div className="details">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualTour;
