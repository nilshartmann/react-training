import React from "react";
import ReactDOM from "react-dom";

import GreetingDetail from "./GreetingDetail";

import { sampleGreetings } from "./_sample-greetings";

// Beispiel: DETAILS
ReactDOM.render(<GreetingDetail />, document.getElementById("mount"));

// Beispiel: MASTER
// ReactDOM.render(<GreetingDetail greetings={sampleGreetings} />, document.getElementById("mount"));
