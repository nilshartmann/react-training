import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// für Custom Hook Übung:
// import CustomHook from "./CustomHook";
// ReactDOM.render(<CustomHook />, document.getElementById("root"));

// für 2. Custom Hook Übung ("Load more")
// Entweder: ergänze deinen Custom Hook
//
//   oder
//
// Kopiere aus hooks_und_mehr/hooks/10_custom_hook die Datei CustomHookApp.tsx in deinen Workspace
// und ergänze die Logik zu nachladen dort.
// Dann hier import und ReactDOM.render verwenden:
// import CustomHookApp from "./CustomHookApp";
// ReactDOM.render(<CustomHookApp />, document.getElementById("root"));
