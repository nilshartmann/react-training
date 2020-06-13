import React from "react";
import ReactDOM from "react-dom";

import ErrorHandler from "./ErrorHandler";
import App from "./App";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <ErrorHandler>
    <App />
  </ErrorHandler>,
  mountNode
);
