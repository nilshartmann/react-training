import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import "./index.css";
import App from "./App";

import configureStore from "./configureStore";
import { Provider } from "react-redux";
const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
