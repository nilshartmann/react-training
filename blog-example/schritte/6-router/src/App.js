import React from "react";
import PostEditor from "./PostEditor";
import PostPage from "./PostPage";
import PostListPage from "./PostListPage";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  function savePost(post) {
    fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(_ => history.push("/"))
      .catch(err => console.error("Saving failed: " + err));
  }

  return (
    <Switch>
      <Route exact path="/">
        <PostListPage />
      </Route>
      <Route path="/post/:postId">
        <PostPage />
      </Route>

      <Route path="/add">
        <PostEditor onSavePost={savePost} />
      </Route>
    </Switch>
  );
}

export default App;
