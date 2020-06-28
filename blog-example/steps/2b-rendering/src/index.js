import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PostEditor from "./PostEditor";

function App() {
  return (
    <div className="Border">
      <h1>Blog Application</h1>
      <PostEditor initialTitle="Hello" initialBody="world" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
