import React, { component } from "react";
import "./CreateGuideAccount.css";
import Nav from "../NavigationBar/NavigationBar";
import Server from '../../services/serverRoutes';


const emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)
const phoneRegex = RegExp(/^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/)

var data = [];

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
            businessName: "",
            phone: "",
            facebook: " ",
            instagram: " ",
            twitter: " ",
            youtube: " ",
            email: "",
            password: "",
            description: " ",
            formErrors: {
                firstName: "",
                lastName: "",
                businessName: "",
                phone: "",
                facebook: "",
                instagram: "",
                twitter: "",
                youtube: "",
                email: "",
                password: "",
                description: "",
            }
        };
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        data = {
            firstName: this.state.firstName, 
            lastName: this.state.businessName,
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
        if (formValid(this.state)) {
            await Server.addGuide(JSON.stringify(data));
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
            case 'businessName':
                formErrors.businessName = value.length < 1 ? "minimum 1 character required" : "";
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
                            <div className="businessName">
                                <label htmlFor="businessName">Business Name*</label>
                                <input
                                    className={formErrors.businessName.length > 0 ? "error" : null}
                                    placeholder="Business Name"
                                    type="text"
                                    name="businessName"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.businessName.length > 0 && (
                                    <span className="errorMessage" >{formErrors.businessName}</span>
                                )}
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