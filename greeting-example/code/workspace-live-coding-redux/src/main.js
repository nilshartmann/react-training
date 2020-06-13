import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import HelloMessage from "./HelloMessage";

ReactDOM.render(
  <Provider store={store}>
    <HelloMessage initialMessage="Hello" />
  </Provider>,
  document.getElementById("mount")
);
