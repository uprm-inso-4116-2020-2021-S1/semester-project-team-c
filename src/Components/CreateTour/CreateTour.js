import React, { component } from "react";
import "./CreateTour.css";
import Nav from "../NavigationBar/NavigationBar";
import Server from '../../services/serverRoutes';
import { Accordion, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { getUserEmail, logout, isLogged } from "../../services/authentication";

const zipcodeRegex = RegExp(/^([0-9\b]{0,5})$/)

var location = [];
var event = [];
var event_location = [];
var tourData = [];
var events = [];
var tour = [tourData, events];






const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // Object.values(formErrors).forEach(val => {
    //     val.length > 0 && (valid = false);
    // });

    // Object.values(rest).forEach(val => {
    //     val == "" && (valid = false)
    // });

    return valid;
};

export class CreateTour extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tour_name: "",
            uid: "",
            coid: "",
            gid: "",
            building: "",
            street: "",
            city: "",
            zipcode: "",
            name: "",
            type: "",
            duration: "",
            meetingPlace: "",
            eventDate: "",
            price: "",
            location_city: "",
            count: 0,
            createdTour: false,


            formErrors: {
                tour_name: "",
                building: "",
                street: "",
                city: "",
                zipcode: "",
                name: "",
                type: "",
                duration: "",
                meetingPlace: "",
                eventDate: "",
                price: "",
                location_city: ""
            }
        };
    }
    clearArray() {
        location = [];
        event = [];
        event_location = [];
        tourData = [];
        events = [];
        tour = [];
    }
    clearEvent_Location() {
        this.setState({
            building: "",
            street: "",
            city: "",
            zipcode: "",
            name: "",
            type: "",
            duration: "",
            meetingPlace: "",
            eventDate: "",
            price: "",
            location_city: " ",
        })

    }
    async componentDidMount() {
        const response = await Server.getUser(getUserEmail());
        const user_data = response.user;
        const get_guide = await Server.getGuide(user_data.uid);
        const guide_data = get_guide.guide_info;
        this.setState({
            uid: user_data.uid,
            gid: guide_data.gid,
            coid: guide_data.company_coid
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        if(!this.state.createdTour){
            tour = {
                tour_name: this.state.tour_name,
                uid: this.state.uid,
                gid: this.state.gid,
                coid: this.state.coid

            };
            // tour = {
            //     tourData,
            //     events
            // };
            console.log(tour);
            if (formValid(this.state)) {
                await Server.addTour(JSON.stringify(tour))
            } else {
                console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
            }
        }
        this.state.count = 0;
        this.clearArray();
        // this.props.history.push('/profile/'+getUserEmail());

    };
    addEventToTour = async (e) => {
        e.preventDefault();
        location = {
            building: this.state.building,
            street: this.state.street,
            city: this.state.city,
            zipcode: this.state.zipcode,
        };
        event = {
            name: this.state.name,
            type: this.state.type,
            duration: this.state.duration,
            meetingPlace: this.state.meetingPlace,
            eventDate: this.state.eventDate,
            price: this.state.price,
            location_city: this.state.city,
        };
        event_location = {
            // count: this.state.count,
            location,
            event
        };
        // events = {
        //     event_location
        // }

        var placeholder = 'event_location'.concat(this.state.count)

        // events[placeholder] = events[placeholder] ? events[placeholder] : [];

        events.push(event_location);


        this.state.count = this.state.count + 1;
        // this.clearEvent_Location();
        this.resetForm();
    }



    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;


        switch (name) {
            case "tour_name":
                formErrors.tour_name = value.length < 2 ? "Tour Name 2 characters required" : " ";
                break;

            case "building":
                formErrors.building = value.length < 3 ? "Building 3 characters required" : " ";
                break;
            case "street":
                formErrors.street = value.length < 3 ? "Street 3 characters required" : " ";
                break;
            case "city":
                formErrors.city = value.length < 3 ? "Street 3 characters required" : " ";
                break;
            case "zipcode":
                formErrors.zipcode = value.length < 3 ? "Street 3 characters required" : " ";
                break;

            case "name":
                formErrors.name = value.length < 2 ? "Event name must be at least 2 characters" : " ";
                break;
            case "type":
                formErrors.type = value.length < 2 ? "Type minimum 2 characters required" : " ";
                break;
            case "duration":
                formErrors.duration = value.length < 3 ? "Duration must be written like so 1:45" : " ";
                break;
            case "meetingPlace":
                formErrors.meetingPlace = value.length < 2 ? "Meeting place minimum 2 characters required" : " ";
                break;
            case "eventDate":
                formErrors.eventDate = value.length < 2 ? "Event Date minimum 2 characters required" : " ";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value })
    }
    resetForm = () => {
        document.getElementById("tour").reset();
    }


    render() {

        const { formErrors } = this.state;
        let { createdTour } = this.state;
        let profile;
        if (!createdTour) {
            profile = <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Tour Information
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className="firstName">
                            <label htmlFor="tour_name">Tour Name</label>
                            <input
                                className={formErrors.tour_name.length > 0 ? "error" : null}
                                placeholder="Tour Name"
                                type="text"
                                name="tour_name"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.tour_name.length > 0 && (
                                <span className="errorMessage" >{formErrors.tour_name}</span>
                            )}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        } else if (createdTour) {
            profile =  <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                {"Add Event"}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body>

                    <div className="firstName">
                        <label htmlFor="name">Event Name</label>
                        <input
                            className={formErrors.name.length > 0 ? "error" : null}
                            placeholder="Event Name"
                            type="text"
                            name="name"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.name.length > 0 && (
                            <span className="errorMessage" >{formErrors.name}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="type">Type: Food and Drinks, Rivers, Beaches</label>
                        <input
                            className={formErrors.building.length > 0 ? "error" : null}
                            placeholder="Type"
                            type="text"
                            name="type"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.type.length > 0 && (
                            <span className="errorMessage" >{formErrors.type}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="duration">Duration</label>
                        <input
                            className={formErrors.building.length > 0 ? "error" : null}
                            placeholder="Duration"
                            type="text"
                            name="duration"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.duration.length > 0 && (
                            <span className="errorMessage" >{formErrors.duration}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="meetingPlace">Meeting Place</label>
                        <input
                            className={formErrors.building.length > 0 ? "error" : null}
                            placeholder="Meeting Place"
                            type="text"
                            name="meetingPlace"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.meetingPlace.length > 0 && (
                            <span className="errorMessage" >{formErrors.meetingPlace}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="eventDate">Event Date</label>
                        <input
                            className={formErrors.eventDate.length > 0 ? "error" : null}
                            placeholder="Event Date"
                            type="text"
                            name="eventDate"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.eventDate.length > 0 && (
                            <span className="errorMessage" >{formErrors.eventDate}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="price">Price</label>
                        <input
                            className={formErrors.price.length > 0 ? "error" : null}
                            placeholder="Price"
                            type="text"
                            name="price"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.price.length > 0 && (
                            <span className="errorMessage" >{formErrors.price}</span>
                        )}
                    </div>


                    <div className="firstName">
                        <label htmlFor="building">Building</label>
                        <input
                            className={formErrors.building.length > 0 ? "error" : null}
                            placeholder="Building"
                            type="text"
                            name="building"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.building.length > 0 && (
                            <span className="errorMessage" >{formErrors.building}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="street">Street</label>
                        <input
                            className={formErrors.street.length > 0 ? "error" : null}
                            placeholder="Street"
                            type="text"
                            name="street"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.street.length > 0 && (
                            <span className="errorMessage" >{formErrors.street}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="city">City</label>
                        <input
                            className={formErrors.city.length > 0 ? "error" : null}
                            placeholder="City"
                            type="text"
                            name="city"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.city.length > 0 && (
                            <span className="errorMessage" >{formErrors.city}</span>
                        )}
                    </div>
                    <div className="firstName">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input
                            className={formErrors.zipcode.length > 0 ? "error" : null}
                            placeholder="Zipcode"
                            type="text"
                            name="zipcode"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.zipcode.length > 0 && (
                            <span className="errorMessage" >{formErrors.zipcode}</span>
                        )}
                    </div>

                    <div className="createAccount">
                        <button onClick={this, this.addEventToTour}>Add Event</button>
                    </div>

                </Card.Body>
            </Accordion.Collapse>
        </Card>
        }
        return (
            <React.Fragment>
                <Nav />
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1>Create Tour</h1>
                        <p>Add all events that your Tour offers before creating Tour</p>
                        <form id="tour" onSubmit={this.handleSubmit} noValidate>
                            <Accordion>
                                {profile}
                            </Accordion>
                            <div className="createAccount">

                                <button type="submit">Create Tour</button>

                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateTour;