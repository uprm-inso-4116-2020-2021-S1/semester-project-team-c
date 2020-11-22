import React, {component, useState} from "react";
import "./LogIn.css";
import Nav from "../NavigationBar/NavigationBar";
import Server from '../../services/serverRoutes';
import { login } from "../../services/authentication";

const emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)

const [error, setError] = useState(null);

const formValid = ({formErrors, ...rest}) => {
  let valid = true;
  
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false); 
  });

  Object.values(rest).forEach(val => {
    val=="" && (valid = false)
  });

  return valid;
};
var data = [];

export class LogIn extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      formErrors:{
        email: "",
        password: "",
      }
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    data = {
      email: this.state.email,
      password: this.state.password

    };
    if(formValid(this.state)){
        await Server.login(JSON.stringify(data)).then((response) => {
          console.log(response);
          login(response.body.access_token, response.body.email, response.body.role);
        }).catch(error => {
          if (error.response.status === 401) setError(error.response.data.message);
          else setError("Something went wrong. Please try again later.");
        });

    } else{console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  }; 

  handleChange = e => {
    e.preventDefault();
    const{ name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name){
      case 'email':
        formErrors.email = emailRegex.test(value) ? "" : "Invalid email Address";
        break;
      case 'password':
        formErrors.password = passwordRegex.test(value) ? "" : "Password must be at least 4 characters, no more than 20 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
        break;
      default:
        break; 
    }

    this.setState({formErrors, [name]: value})
  }

  render() {

    const {formErrors} = this.state;

    return (
      <React.Fragment>
      <Nav/>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input 
                className={formErrors.email.length > 0 ? "error" : null} 
                placeholder ="email" 
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
                placeholder ="password" 
                type="password" 
                name="password" 
                noValidate
                onChange={this.handleChange}
                />
            </div>
            {formErrors.password.length > 0 && (
                  <span className="errorMessage" >{formErrors.password}</span>
                )}
            <div className="Submit">
              <button type="submit">Log In</button> 
              <small>Dont have an account?</small> <a href="/createaccount">Create Account</a>
            </div>
          </form> 
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default LogIn;
