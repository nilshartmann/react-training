import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PostEditor from "./PostEditor";

ReactDOM.render(
  <PostEditor initialTitle="Hello" initialBody="world" />,
  document.getElementById("root")
);
