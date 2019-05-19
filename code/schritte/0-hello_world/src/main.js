import React from "react";
import ReactDOM from "react-dom";

import HelloMessage from "./HelloMessage";

const mountNode = document.getElementById("mount");
ReactDOM.render(<HelloMessage initialGreeting="Hello" />, mountNode);
