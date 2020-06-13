import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import GreetingController from "./GreetingController";
import ErrorHandler from "./ErrorHandler";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Provider store={store}>
    <ErrorHandler>
      <GreetingController />
    </ErrorHandler>
  </Provider>,
  mountNode
);
