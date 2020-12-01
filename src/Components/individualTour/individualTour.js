import React from "react";
import "./individualTour.css";
import Rivers from "../../images/rivers.jpg";
import Beaches from "../../images/beaches.jpg";
import FoodAndDrinks from "../../images/foodAndDrinks.jpg";
import Server from "../../services/serverRoutes";



class IndividualTour extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            guides: [],
            events: []
        }
    }

    async componentDidMount() {
        await Server.getTourGuides(this.props.results.guide_company_coid, this.props.results.tid).then((tourGuides) => {
            this.setState({
                guides: tourGuides.tourGuides
            })
        })
        await Server.getTourEvents(this.props.results.tid).then((eventList) => {
            this.setState({
                events: eventList.body
            })
        })

    }

    render() {
        let {guides, events} =this.state;
        return (
            <div className="IndividualTour">
                <div className="info">
                    <div className="name">{this.props.results.tour_name}</div>
                    <div className="details">
                        <div className="Container">
                            Guides:
                            {guides.map(guide => (
                                <div className="name">{guide.firstName} {guide.lastName}</div>
                            ))}
                        </div>
                        <div className="Container">
                            Events:
                            {events.map(event => (
                                <div className="name"> {event.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualTour;
