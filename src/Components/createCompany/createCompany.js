import React, { component } from "react";
import "./CreateAccount.css";
import Nav from "../NavigationBar/NavigationBar";
const zipcodeRegex = RegExp(/^([0-9\b]{5,5})$/)
const cityRegex = RegExp(/^([a-zA-Z]{4,30})$/)


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

export class CreateCompany extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            companyURL: "", 
            building: "",
            street: "",
            city: "",
            zipcode: "",
            formErrors: {
                companyName: "",
                companyURL: "", 
                building: "",
                street: "",
                city: "",
                zipcode: "",
              }

        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        Company Name: ${this.state.companyName}
        Company URL: ${this.state.companyURL}
        Building: ${this.state.building}
        Street: ${this.state.street}
        City: ${this.state.city}
        Zipcode: ${this.state.zipcode}

        `)
        } else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        let reg = str.match(/.com|.net|.org$)/);

        switch (name) {
            case 'companyName':
                formErrors.companyName = value.length < 2 ? "companyName minimum 2 characters required" : "";
                break;
            case 'companyUrl':
                formErrors.companyURL = reg.test(value) ? "companyURL must end in .com|.net|.org" : "";
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

        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
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
                                <label htmlFor=" companyURL">Company Name</label>
                                <input
                                    className={formErrors.lastName.length > 0 ? "error" : null}
                                    placeholder="Company Name"
                                    type="text"
                                    name=" companyURL"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                            </div>
                            {formErrors. companyURL.length > 0 && (
                                <span className="errorMessage" >{formErrors. companyURL}</span>
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
                            <div className="createAccount">
                                <button type="submit">Create Account</button>
                                <small>Already have an account?</small> <a href="/login"> Sign in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateCompany;