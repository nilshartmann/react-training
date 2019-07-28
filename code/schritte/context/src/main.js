import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import ErrorHandler from "./ErrorHandler";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <ErrorHandler>
    <Layout />
  </ErrorHandler>,
  mountNode
);
