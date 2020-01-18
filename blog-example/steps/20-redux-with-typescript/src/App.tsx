import React from "react";
import { Switch, Route } from "react-router-dom";
import PostPage from "./PostPage";
import PostListPage from "./PostListPage";
import NotFoundPage from "./NotFound";
import PostEditorPage from "./PostEditorPage";
import LoginPage from "./LoginPage";
import AppHeader from "./AppHeader";

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
