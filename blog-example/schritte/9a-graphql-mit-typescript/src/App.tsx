import React from "react";
import { Switch, Route } from "react-router-dom";
import PostPage from "./PostPage";
import PostListPage from "./PostListPage";
import NotFoundPage from "./NotFound";
import PostEditorPage from "./PostEditorPage";
import LoginPage from "./LoginPage";

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

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
