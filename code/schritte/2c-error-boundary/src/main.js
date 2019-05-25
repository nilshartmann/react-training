import React from "react";
import ReactDOM from "react-dom";

import ErrorHandler from "./ErrorHandler";
import GreetingController from "./GreetingController";

const urlParams = new URLSearchParams(window.location.search);
const component = urlParams.has("no-error-boundary") ? (
  <GreetingController />
) : (
  <ErrorHandler>
    <GreetingController />
  </ErrorHandler>
);

const mountNode = document.getElementById("mount");
ReactDOM.render(component, mountNode);

// http://localhost:8080/?no-error-boundary
