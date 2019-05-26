import React from "react";
import ReactDOM from "react-dom";

import GreetingController from "./GreetingController";
import ErrorHandler from "./ErrorHandler";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <ErrorHandler>
    <GreetingController />
  </ErrorHandler>,
  mountNode
);
