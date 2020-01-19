import React from "react";
import { Switch, Route } from "react-router-dom";
import PostListPage from "./postlist/PostListPage";
import NotFoundPage from "./NotFound";
import AppHeader from "./AppHeader";
import PostPage from "./post/PostPage";
import LoginPage from "./login/LoginPage";
import PostEditorPage from "./editor/PostEditorPage";

function App() {
  return (
    <div className="App">
      <AppHeader />
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
    </div>
  );
}

export default App;
