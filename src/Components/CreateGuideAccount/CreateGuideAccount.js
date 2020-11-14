import React, { component } from "react";
import "./CreateGuideAccount.css";
import Nav from "../NavigationBar/NavigationBar";
import Server from '../../services/serverRoutes';
import { Accordion, Card } from "react-bootstrap";


const emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
const urlRegex = RegExp(/^([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/)
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)
const phoneRegex = RegExp(/^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/)
const zipcodeRegex = RegExp(/^([0-9\b]{0,4})$/)
const cityRegex = RegExp(/^([a-zA-Z]{2,5})$/)

var guideData = [];
var companyData = [];

var data = [
    guideData,
    companyData
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

export class CreateGuideAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            facebook: " ",
            instagram: " ",
            twitter: " ",
            youtube: " ",
            email: "",
            password: "",
            description: " ",
            companyName: " ",
            companyURL: " ",
            building: " ",
            street: " ",
            city: " ",
            zipcode: "",
            formErrors: {
                firstName: "",
                lastName: "",
                phone: "",
                facebook: "",
                instagram: "",
                twitter: "",
                youtube: "",
                email: "",
                password: "",
                description: "",
                companyName: "",
                companyURL: "",
                building: "",
                street: "",
                city: "",
                zipcode: "",
            }
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        guideData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            role: 1,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            twitter: this.state.twitter,
            youtube: this.state.youtube,
            description: this.state.description
        };
        companyData = {
            companyName: this.state.companyName,
            companyURL: this.state.companyURL,
            building: this.state.building,
            street: this.state.street,
            city: this.state.city,
            zipcode: this.state.zipcode
        };
        data = {
            guideData,
            companyData
        };
        if (formValid(this.state)) {
            // await Server.addGuide(JSON.stringify(data));
            console.log(" Working?")
            console.log(JSON.stringify(data));
        } else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;


        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 2 ? "minimum 2 characters required" : "";
                break;
            case 'lastName':
                formErrors.lastName = value.length < 2 ? "minimum 2 characters required" : "";
                break;
            case 'phone':
                formErrors.phone = phoneRegex.test(value) ? "" : "Must be valid phone number, make sure to leave the spaces";
                break;
            case 'facebook':
                formErrors.facebook = value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case 'instagram':
                formErrors.instagram = value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case 'twitter':
                formErrors.twitter = value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case 'youtube':
                formErrors.youtube = value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? "" : "Invalid email Address";
                break;
            case 'password':
                formErrors.password = passwordRegex.test(value) ? "" : "Password must be at least 4 characters, no more than 20 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
                break;
            case 'companyName':
                formErrors.companyName = value.length < 2 ? "companyName minimum 2 characters required" : "";
                break;
            case 'companyUrl':
                formErrors.companyURL = urlRegex.test(value) ? "companyURL must end in .com|.net|.org" : "";
                break;
            case 'building':
                formErrors.building = value.length < 2 ? "building minimum 2 characters required" : "";
                break;
            case 'street':
                formErrors.street = value.length < 2 ? "street minimum 2 characters required" : "";
                break;
            case 'city':
                formErrors.city = cityRegex.test(value) ? "city minimum 2 characters required" : "";
                break;
            case 'zipcode':
                formErrors.zipcode = zipcodeRegex.test(value) ? "zipcode minimum 5 characters required" : "";
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
                        <h1>Create Account!</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Guide Information
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                            <div className="firstName">
                                                <label htmlFor="firstName">First Name</label>
                                                <input
                                                    className={formErrors.firstName.length > 0 ? "error" : null}
                                                    placeholder="First Name"
                                                    type="text"
                                                    name="firstName"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                                {formErrors.firstName.length > 0 && (
                                                    <span className="errorMessage" >{formErrors.firstName}</span>
                                                )}
                                            </div>

                                            <div className="lastName">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input
                                                    className={formErrors.lastName.length > 0 ? "error" : null}
                                                    placeholder="Last Name"
                                                    type="text"
                                                    name="lastName"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>

                                            <div className="phone">
                                                <label htmlFor="phone">Phone Number*</label>
                                                <input
                                                    className={formErrors.phone.length > 0 ? "error" : null}
                                                    placeholder="xxx xxx xxxx"
                                                    type="text"
                                                    name="phone"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.phone.length > 0 && (
                                                <span className="errorMessage" >{formErrors.phone}</span>
                                            )}

                                            <div className="email">
                                                <label htmlFor="email">Email*</label>
                                                <input
                                                    className={formErrors.email.length > 0 ? "error" : null}
                                                    placeholder="email"
                                                    type="email"
                                                    name="email"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.email.length > 0 && (
                                                <span className="errorMessage" >{formErrors.email}</span>
                                            )}

                                            <div className="password">
                                                <label htmlFor="password">Password*</label>
                                                <input
                                                    className={formErrors.password.length > 0 ? "error" : null}
                                                    placeholder="password"
                                                    type="password"
                                                    name="password"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.password.length > 0 && (
                                                <span className="errorMessage" >{formErrors.password}</span>
                                            )}

                                            <div className="facebook">
                                                <label htmlFor="facebook">Facebook</label>
                                                <input
                                                    className={formErrors.facebook.length > 0 ? "error" : null}
                                                    placeholder="url to profile"
                                                    type="text"
                                                    name="facebook"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.facebook.length > 0 && (
                                                <span className="errorMessage" >{formErrors.facebook}</span>
                                            )}

                                            <div className="instagram">
                                                <label htmlFor="instagram">Instagram</label>
                                                <input
                                                    className={formErrors.instagram.length > 0 ? "error" : null}
                                                    placeholder="url to profile"
                                                    type="text"
                                                    name="instagram"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.instagram.length > 0 && (
                                                <span className="errorMessage" >{formErrors.instagram}</span>
                                            )}


                                            <div className="twitter">
                                                <label htmlFor="twitter">Twitter</label>
                                                <input
                                                    className={formErrors.twitter.length > 0 ? "error" : null}
                                                    placeholder="url to profile"
                                                    type="text"
                                                    name="twitter"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.twitter.length > 0 && (
                                                <span className="errorMessage" >{formErrors.twitter}</span>
                                            )}

                                            <div className="youtube">
                                                <label htmlFor="youtube">Youtube</label>
                                                <input
                                                    className={formErrors.youtube.length > 0 ? "error" : null}
                                                    placeholder="url to profile"
                                                    type="text"
                                                    name="youtube"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.youtube.length > 0 && (
                                                <span className="errorMessage" >{formErrors.youtube}</span>
                                            )}

                                            <div className="description">
                                                <label htmlFor="description">Breaf Description of your Tours</label>
                                                <input
                                                    className={formErrors.description.length > 0 ? "error" : null}
                                                    placeholder="You will love our tours because..."
                                                    type="text"
                                                    name="description"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.description.length > 0 && (
                                                <span className="errorMessage" >{formErrors.description}</span>
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
                                                <label htmlFor="companyName">Company Name</label>
                                                <input
                                                    className={formErrors.companyName.length > 0 ? "error" : null}
                                                    placeholder="Company Name"
                                                    type="text"
                                                    name="companyName"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                                {formErrors.companyName.length > 0 && (
                                                    <span className="errorMessage" >{formErrors.companyName}</span>
                                                )}
                                            </div>

                                            <div className=" companyURL">
                                                <label htmlFor=" companyURL">Company URL</label>
                                                <input
                                                    className={formErrors.lastName.length > 0 ? "error" : null}
                                                    placeholder="Company URL"
                                                    type="text"
                                                    name=" companyURL"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.companyURL.length > 0 && (
                                                <span className="errorMessage" >{formErrors.companyURL}</span>
                                            )}
                                            <div className="building">
                                                <label htmlFor="building">Building</label>
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
                                                <label htmlFor="street">Street</label>
                                                <input
                                                    className={formErrors.street.length > 0 ? "error" : null}
                                                    placeholder="street"
                                                    type="street"
                                                    name="street"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {formErrors.street.length > 0 && (
                                                <span className="errorMessage" >{formErrors.street}</span>
                                            )}
                                            <div className="city">
                                                <label htmlFor="city">City</label>
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

export default CreateGuideAccount;