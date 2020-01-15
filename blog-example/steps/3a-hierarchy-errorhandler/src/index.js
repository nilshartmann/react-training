import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import ErrorHandler from "./ErrorHandler";

const urlParams = new URLSearchParams(window.location.search);
const component = urlParams.has("with-error-handler") ? (
  <ErrorHandler>
    <App />
  </ErrorHandler>
) : (
  <App />
);

ReactDOM.render(component, document.getElementById("root"));

// http://localhost:3000/?with-error-handler
