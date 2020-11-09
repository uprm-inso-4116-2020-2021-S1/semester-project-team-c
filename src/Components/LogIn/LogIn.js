import React,{useState} from "react";
import "./LogIn.css";
import Nav from "../NavigationBar/NavigationBar";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <div className="Login">
    <Nav />
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email </FormLabel><br />
          <FormControl
            autoFocus
            
            type="email"
            value={email}
            
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel><br />
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup><br />
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}