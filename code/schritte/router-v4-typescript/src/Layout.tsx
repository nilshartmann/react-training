import * as React from "react";

import GreetingController from "./GreetingController";
import GreetingDisplayController from "./GreetingDisplayController";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const Layout = () => (
  <Router>
    <div>
      <h1 style={{ paddingBottom: "5px", marginBottom: "1rem", borderBottom: "1px solid gray" }}>Greeting App</h1>
      <Switch>
        <Route path="/greet/:greetingId" component={GreetingDisplayController} />
        <Route path="/" component={GreetingController} />
      </Switch>
    </div>
  </Router>
);

export default Layout;
