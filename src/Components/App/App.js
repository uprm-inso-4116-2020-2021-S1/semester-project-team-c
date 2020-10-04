import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import Home from "../Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        {/* <Route exact path="/home" component={Home} /> */}
        {/* In case no route does not exist, can create a 404 page341 */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;