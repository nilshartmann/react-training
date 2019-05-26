import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorHandler from "./ErrorHandler";

const mountNode = document.getElementById("mount");

ReactDOM.render(
  <ErrorHandler>
    <App />
  </ErrorHandler>,
  mountNode
);
