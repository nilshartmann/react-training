import React from "react";
import ReactDOM from "react-dom";

import GreetingController from "./GreetingController";

const mountNode = document.getElementById("mount");
ReactDOM.render(<GreetingController />, mountNode);
