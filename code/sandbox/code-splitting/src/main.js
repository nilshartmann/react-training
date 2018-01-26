import React from "react";
import ReactDOM from "react-dom";

import HelloAsync from "./HelloAsync";

const mountNode = document.getElementById("mount");
ReactDOM.render(<HelloAsync />, mountNode);
