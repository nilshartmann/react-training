// polyfill for IE
require("es6-promise").polyfill();
require("whatwg-fetch");

import React from "react";
import ReactDOM from "react-dom";

import HelloMessage from "./HelloMessage";

const mountNode = document.getElementById("mount");
ReactDOM.render(<HelloMessage />, mountNode);
