import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "./index.css";
import App from "./ui/App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
