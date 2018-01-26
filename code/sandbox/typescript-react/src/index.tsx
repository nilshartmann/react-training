// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

// import process from 'Process';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import { HelloMessage } from "./greeting";

import Routes from "./routes";
// if (process.env.NODE_ENV !== 'production') console.log('Ich bin nicht in Production');

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  mountNode
);
