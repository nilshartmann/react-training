import React from "react";
import ReactDOM from "react-dom";
import DevTools from "mobx-react-devtools";

import GreetingController from "./GreetingController";
import store from "./store";
const mountNode = document.getElementById("mount");
ReactDOM.render(
  <div>
    <GreetingController store={store} />
    <DevTools />
  </div>,
  mountNode
);
