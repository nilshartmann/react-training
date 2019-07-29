import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import ErrorHandler from "./ErrorHandler";
import App from "./App";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Provider store={store}>
    <ErrorHandler>
      <App />
    </ErrorHandler>
  </Provider>,
  mountNode
);
