// polyfill for IE
require("es6-promise").polyfill();
require("whatwg-fetch");

import React from "react";
import ReactDOM from "react-dom";

import GreetingDetail from "./GreetingDetail";

const mountNode = document.getElementById("mount");
ReactDOM.render(<GreetingDetail />, mountNode);
