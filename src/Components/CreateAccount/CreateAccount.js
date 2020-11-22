import React, { component } from "react";
import "./CreateAccount.css";
import Nav from "../NavigationBar/NavigationBar";
import Server from '../../services/serverRoutes';

const emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)

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

export class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    }
    if (formValid(this.state)) {
      Server.addCustomer(JSON.stringify(data));
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
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage" >{formErrors.lastName}</span>
              )}
              <div className="email">
                <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Password</label>
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

export default CreateAccount;
