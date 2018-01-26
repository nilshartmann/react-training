import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { greetingReducer } from "./reducers";

const store = createStore(
  combineReducers({
    greeting: greetingReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

import HelloMessage from "./HelloMessage";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Provider store={store}>
    <HelloMessage />
  </Provider>,
  mountNode
);
