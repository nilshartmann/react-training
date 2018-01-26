import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import GreetingController from "./GreetingController";
import GreetingDisplay from "./GreetingDisplay";
import Layout from "./Layout";

const mountNode = document.getElementById("mount");
const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={GreetingController} />
      {/* Hier eine Route auf GreetingDisplay einfügen. Darin den übergebenen Gruß darstellen.  */}
    </Route>
  </Router>
);

ReactDOM.render(router, mountNode);
