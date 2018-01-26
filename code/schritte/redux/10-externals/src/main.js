import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import Layout from "./components/Layout";
import { rootReducer } from "./reducers";
import { loadGreetings } from "./actions";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// init
store.dispatch(loadGreetings);

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  mountNode
);
