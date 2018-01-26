import React from "react";
import ReactDOM from "react-dom";
import { hashHistory, IndexRoute, Route, Router } from "react-router";

import Layout from "./Layout";

import GreetingController from "./GreetingController";
import GreetingDisplayController from "./GreetingDisplayController";

const mountNode = document.getElementById("mount");
const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={GreetingController} />
      <Route path="greet/:greetingId" component={GreetingDisplayController} />
    </Route>
  </Router>
);

ReactDOM.render(router, mountNode);
