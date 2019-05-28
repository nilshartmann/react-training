import React from "react";
import ReactDOM from "react-dom";

import ErrorHandler from "./ErrorHandler";
import GreetingController from "./GreetingController";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <React.Suspense fallback={<h1>Applicaton is loading...</h1>}>
    <ErrorHandler>
      <GreetingController />
    </ErrorHandler>
  </React.Suspense>,
  mountNode
);
