import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Layout from "./components/Layout";
import { rootReducer } from "./reducers";
import { loadGreetings } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// init
store.dispatch(loadGreetings);

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  mountNode
);
