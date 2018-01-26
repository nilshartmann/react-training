import React from "react";

import GreetingController from "./GreetingController";
import GreetingDisplayController from "./GreetingDisplayController";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const Layout = () => (
  <Router>
    <div>
      <h1>Greetings</h1>
      <Switch>
        <Route path="/greet/:greetingId" component={GreetingDisplayController} />
        <Route path="/" component={GreetingController} />
      </Switch>
    </div>
  </Router>
);

export default Layout;
