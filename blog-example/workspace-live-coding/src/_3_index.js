import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PostEditor, { PostList } from "./PostEditor";

import mockPosts from "./mock";

ReactDOM.render(<PostEditor />, document.getElementById("root"));

if (false) {
  ReactDOM.render(<PostList posts={mockPosts} />, document.getElementById("root"));
}
