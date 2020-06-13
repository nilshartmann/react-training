import React from "react";
import ReactDOM from "react-dom";

import ErrorHandler from "./ErrorHandler";
import GreetingController from "./GreetingController";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <ErrorHandler>
    <GreetingController />
  </ErrorHandler>,
  mountNode
);
