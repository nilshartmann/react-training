// polyfill for IE
require("es6-promise").polyfill();
require("whatwg-fetch");

import React from "react";
import ReactDOM from "react-dom";

import "./normalize.css";
import "./styles.css";
import "./lib/nv.d3.css";
import "./google-fonts.css";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import GreetingController from "./GreetingController";
import GreetingDisplay from "./GreetingDisplay";
import Layout from "./Layout";

const mountNode = document.getElementById("root");
const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={GreetingController} />
      <Route path="greet" component={GreetingDisplay} />
    </Route>
  </Router>
);

ReactDOM.render(router, mountNode);
