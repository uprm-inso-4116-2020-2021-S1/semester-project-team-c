import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import Home from "../Home/Home";
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateGuideAccount from "../CreateGuideAccount/CreateGuideAccount";
import MeetOurGuides from "../MeetOurGuides/MeetOurGuides";
import Tours from "../Tours/Tours";
import Profile from "../Profile/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/createaccount" component={CreateAccount} />
        <Route exact path="/createguideaccount" component={CreateGuideAccount} />
        <Route exact path="/meetourguides" component={MeetOurGuides} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/home" component={Home} /> */}
        {/* In case no route does not exist, can create a 404 page341 */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;