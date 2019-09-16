import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import PageNotFound from "./PageNotFound/PageNotFound";
import HelloContainer from "./Hello/HelloContainer";
import Navigation from "./Navigation/Navigation";

const App = () => (
  <Router>
    <Navigation/>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/hello" component={HelloContainer} />
      <Route path="/about" component={About} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;
