import React from "react";
import ReactDOM from "react-dom";

import GreetingDetail from "./GreetingDetail";

const mountNode = document.getElementById("mount");
ReactDOM.render(<GreetingDetail initialGreeting="Hello" />, mountNode);
