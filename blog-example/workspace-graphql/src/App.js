import React from "react";
import PostPage from "./PostPage";
import PostListPage from "./PostListPage";
import { Switch, Route } from "react-router-dom";

import NotFoundPage from "./NotFound";
import PostEditorPage from "./PostEditorPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PostListPage />
      </Route>
      <Route path="/post/:postId">
        <PostPage />
      </Route>

      <Route path="/add">
        <PostEditorPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
