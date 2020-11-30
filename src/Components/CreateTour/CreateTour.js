import React, { component } from "react";
import "./CreateTour.css";
import Nav from "../NavigationBar/NavigationBar";
import Server from '../../services/serverRoutes';
import { Accordion, Card } from "react-bootstrap";


const emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
const urlRegex = RegExp(/^([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/) //TODO fix this regex
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)
const phoneRegex = RegExp(/^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/)
const zipcodeRegex = RegExp(/^([0-9\b]{0,4})$/)
const cityRegex = RegExp(/^([a-zA-Z]{2,5})$/)

var tourData = [];
var event_location = [];
var events = [];
var location = [];
var event = [];
var count = 0;

var tour = [
    tourData,
    events = [       
        event_location = [
            location,
            event
        ]
    ]
];

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val == "" && (valid = false)
    });

    return valid;
};

export class CreateTour extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tour_name: "",
            gid: "",
            coid: "",
            uid: " ",

            //location
            building: " ",
            street: " ",
            city: " ",
            zipcode: " ",

            //event
            name: " ",
            type: " ",
            duration: " ",
            meetingPlace: " ",
            eventDate: " ",
            price: " ",
            tour_tid: " ",
            location_lid: " ",
            location_city: " ",
            // events:{
            //     events_location:{
            //         location:{
            //             building: " ",
            //             street: " ",
            //             city: " ",
            //             zipcode: " ",
            //         },
            //         event: {
            //             name: " ",
            //             type: " ",
            //             duration: " ",
            //             meetingPlace: " ",
            //             eventData: " ",
            //             price: " ",
            //             tour_tid: " ",
            //             location_lid: " ",
            //             location_city: " ",
            //         },
            //     },
            // },
            formErrors: {
                tour_name: "",
                gid: "",
                coid: "",
                uid: " ",

                building: " ",
                street: " ",
                city: " ",
                zipcode: " ",

                name: " ",
                type: " ",
                duration: " ",
                meetingPlace: " ",
                eventDate: " ",
                price: " ",
                tour_tid: " ",
                location_lid: " ",
                location_city: " "
            }
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        tourData = {
            firstName: this.state.tour_name,
            lastName: this.state.gid,
            phoneNumber: this.state.coid,
            email: this.state.uid,
        };   
        tour = {
            tourData,
            events
        }
        console.log(tour)
    };
    addEventToTour(){
        location = {
            building: this.state.building,
            street: this.state.street,
            city: this.state.city,
            zipcode: this.state.zipcode,
        }
        event = {
            name: this.state.name,
            type: this.state.type,
            duration: this.state.duration,
            meetingPlace: this.state.meetingPlace,
            eventDate: this.state.eventDate,
            price: this.state.price,
            tour_tid: this.state.tour_tid,
            location_lid: this.state.location_lid,
            location_city: this.state.location_city,
        }
        event_location = {
            location,
            event
        }
        let temp = this.state.events;
        temp["event_location"] = temp["event_location"] ? temp["event_location"] : [];
        temp["event_location"].push(this.state.event_location);

        this.setState({events: temp});
    }

    eventHandleChange= e =>{
        e.preventDefault();
        const{name, value} = e.target;
        let formErrors = this.state.formErrors;
        // let tempState = {
        //     [name]: value,
        //     event_location: {
        //         location:{
        //             ...this.state.location,
        //             [name]:value
        //         },
        //         event:{
        //             ...this.state.event,
        //             [name]: value
        //         }
        //     }
        // }

        this.setState({ formErrors, [name]: value })

    }


    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;


        switch (name) {
            case 'tour_name':
                formErrors.tour_name = value.length < 2 ? "tour_name 2 characters required" : "";
                break;
            case 'gid':
                formErrors.gid = value.length < 2 ? "gid 2 characters required" : "";
                break;
            case 'coid':
                formErrors.coid = value.length < 2 ? "" : "coid be valid phone number, make sure to leave the spaces";
                break;
            case 'uid':
                formErrors.uid = value.length < 3 ? "uid 3 characters required" : "";
                break;

            case 'building':
                formErrors.building = value.length < 3 ? "building 3 characters required" : "";
                break;
            case 'street':
                formErrors.street = value.length < 3 ? "street 3 characters required" : "";
                break;
            case 'city':
                formErrors.city = value.length < 3 ? "city 3 characters required" : "";
                break;
            case 'zipcode':
                formErrors.zipcode = value.length < 2 ? "" : "zipcode email Address";
                break;

            case 'name':
                formErrors.name = value.length < 2 ? "" : "name must be at least 4 characters, no more than 20 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
                break;
            case 'type':
                formErrors.type = value.length < 2 ? "type minimum 2 characters required" : "";
                break;
            case 'duration':
                formErrors.duration = value.length < 2 ? "duration must end in .com|.net|.org" : "";
                break;
            case 'meetingPlace':
                formErrors.meetingPlace = value.length < 2 ? "meetingPlace minimum 2 characters required" : "";
                break;
            case 'eventDate':
                formErrors.eventDate = value.length < 2 ? "eventDate minimum 2 characters required" : "";
                break;
            case 'tour_tid':
                formErrors.tour_tid = value.length < 2 ? "tour_tid minimum 2 characters required" : "";
                break;
            case 'location_lid':
                formErrors.location_lid = value.length < 2 ? "location_lid minimum 5 characters required" : "";
                break;
            case 'location_city':
                formErrors.location_city = value.length < 2 ? "location_city minimum 5 characters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value })
    }

    render() {

        const { formErrors } = this.state;

        return (
            <React.Fragment>
                <Nav />
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1>Create Tour</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Tour Information
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                            <div className="firstName">
                                                <label htmlFor="tour_name">First Name</label>
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

                                            <div className="lastName">
                                                <label htmlFor="gid">Last Name</label>
                                                <input
                                                    className={formErrors.gid.length > 0 ? "error" : null}
                                                    placeholder="gid"
                                                    type="text"
                                                    name="gid"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>

                                            <div className="phone">
                                                <label htmlFor="coid">Phone Number*</label>
                                                <input
                                                    className={formErrors.coid.length > 0 ? "error" : null}
                                                    placeholder="coid"
                                                    type="text"
                                                    name="coid"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.coid.length > 0 && (
                                                <span className="errorMessage" >{formErrors.phone}</span>
                                            )}

                                            <div className="email">
                                                <label htmlFor="uid">Email*</label>
                                                <input
                                                    className={formErrors.uid.length > 0 ? "error" : null}
                                                    placeholder="uid"
                                                    type="uid"
                                                    name="uid"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.uid.length > 0 && (
                                                <span className="errorMessage" >{formErrors.uid}</span>
                                            )}

                                            <div className="password">
                                                <label htmlFor="building">building*</label>
                                                <input
                                                    className={formErrors.building.length > 0 ? "error" : null}
                                                    placeholder="building"
                                                    type="building"
                                                    name="building"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.building.length > 0 && (
                                                <span className="errorMessage" >{formErrors.building}</span>
                                            )}

                                            <div className="street">
                                                <label htmlFor="street">Facebook</label>
                                                <input
                                                    className={formErrors.street.length > 0 ? "error" : null}
                                                    placeholder="street"
                                                    type="text"
                                                    name="street"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.street.length > 0 && (
                                                <span className="errorMessage" >{formErrors.street}</span>
                                            )}

                                            <div className="instagram">
                                                <label htmlFor="city">city</label>
                                                <input
                                                    className={formErrors.city.length > 0 ? "error" : null}
                                                    placeholder="city"
                                                    type="text"
                                                    name="city"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.city.length > 0 && (
                                                <span className="errorMessage" >{formErrors.city}</span>
                                            )}


                                            <div className="twitter">
                                                <label htmlFor="zipcode">zipcode</label>
                                                <input
                                                    className={formErrors.zipcode.length > 0 ? "error" : null}
                                                    placeholder="zipcode"
                                                    type="text"
                                                    name="zipcode"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.zipcode.length > 0 && (
                                                <span className="errorMessage" >{formErrors.zipcode}</span>
                                            )}

                                            <div className="youtube">
                                                <label htmlFor="name">name</label>
                                                <input
                                                    className={formErrors.name.length > 0 ? "error" : null}
                                                    placeholder="name"
                                                    type="text"
                                                    name="name"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.name.length > 0 && (
                                                <span className="errorMessage" >{formErrors.name}</span>
                                            )}

                                            <div className="description">
                                                <label htmlFor="type">name</label>
                                                <input
                                                    className={formErrors.name.length > 0 ? "error" : null}
                                                    placeholder="You will love our tours because..."
                                                    type="text"
                                                    name="type"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.name.length > 0 && (
                                                <span className="errorMessage" >{formErrors.type}</span>
                                            )}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Company Information
                        </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                            <div className="companyName">
                                                <label htmlFor="duration">Company Name</label>
                                                <input
                                                    className={formErrors.duration.length > 0 ? "error" : null}
                                                    placeholder="duration"
                                                    type="text"
                                                    name="duration"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                                {formErrors.duration.length > 0 && (
                                                    <span className="errorMessage" >{formErrors.duration}</span>
                                                )}
                                            </div>

                                            <div className=" companyURL">
                                                <label htmlFor=" meetingPlace">Company URL</label>
                                                <input
                                                    className={formErrors.meetingPlace.length > 0 ? "error" : null}
                                                    placeholder="meetingPlace"
                                                    type="text"
                                                    name=" meetingPlace"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.meetingPlace.length > 0 && (
                                                <span className="errorMessage" >{formErrors.meetingPlace}</span>
                                            )}
                                            <div className="building">
                                                <label htmlFor="eventDate">eventDate</label>
                                                <input
                                                    className={formErrors.meetingPlace.length > 0 ? "error" : null}
                                                    placeholder="eventDate"
                                                    type="text"
                                                    name="eventDate"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.eventDate.length > 0 && (
                                                <span className="errorMessage" >{formErrors.eventDate}</span>
                                            )}
                                            <div className="street">
                                                <label htmlFor="price">price</label>
                                                <input
                                                    className={formErrors.price.length > 0 ? "error" : null}
                                                    placeholder="price"
                                                    type="price"
                                                    name="price"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.price.length > 0 && (
                                                <span className="errorMessage" >{formErrors.price}</span>
                                            )}
                                            <div className="city">
                                                <label htmlFor="tour_tid">City</label>
                                                <input
                                                    className={formErrors.city.length > 0 ? "error" : null}
                                                    placeholder="city"
                                                    type="city"
                                                    name="city"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.city.length > 0 && (
                                                <span className="errorMessage" >{formErrors.city}</span>
                                            )}
                                            <div className="zipcode">
                                                <label htmlFor="zipcode">Zipcode</label>
                                                <input
                                                    className={formErrors.zipcode.length > 0 ? "error" : null}
                                                    placeholder="zipcode"
                                                    type="zipcode"
                                                    name="zipcode"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.zipcode.length > 0 && (
                                                <span className="errorMessage" >{formErrors.zipcode}</span>
                                            )}

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already have an account?</small><a href="/login">Log In</a>
                        </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateTour;