import React from "react";
import ReactDOM from "react-dom";
import DevTools from "mobx-react-devtools";

import { Provider } from "mobx-react";

import Layout from "./components/Layout";
import store from "./store";

store.loadGreetings();

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Layout />
    </Provider>
    <DevTools />
  </div>,
  mountNode
);
