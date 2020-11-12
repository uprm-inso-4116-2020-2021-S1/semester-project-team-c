import React,{useState} from "react";
import "./CreateAccount.css";
import Nav from "../NavigationBar/NavigationBar";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  function validateForm() {
    return password === repassword && email.length > 0 && password.length > 6;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <div className="CreateAccount">
    <Nav />
    <div className="Createaccountbox"> 
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel> Enter Email </FormLabel><br />
          <FormControl
            autoFocus
            
            type="email"
            value={email}
            
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Enter Password</FormLabel><br />
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
          <FormGroup controlId="password" bsSize="large">
          <FormLabel>Re enter Password</FormLabel><br />
          <FormControl
            value={repassword}
            onChange={e => setRePassword(e.target.value)}
            type="password"
          />
        </FormGroup><br />
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Submit
        </Button>
      </form>
      </div>
    </div>
  );
}