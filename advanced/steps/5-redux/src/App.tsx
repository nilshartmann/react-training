import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFound";
import AppHeader from "./AppHeader";

import PostEditorPage from "./blog/editor/PostEditorPage";
import PostListPage from "./blog/postlist/PostListPage";
import PostPage from "./blog/post/PostPage";
import LoginPage from "./auth/LoginPage";
import BlogPage from "blog/BlogPage";
import useAppSelector from "useAppSelector";
import LoadingIndicator from "LoadingIndicator";

function useApiState() {
  const loading = useAppSelector((state) => state.api.loading);
  const description = useAppSelector((state) => state.api.description);

  return { loading, description };
}

function App() {
  const { loading, description } = useApiState();

  return (
    <div className="App">
      <AppHeader />
      {loading && <LoadingIndicator>{description}</LoadingIndicator>}
      {loading || (
        <Switch>
          <Route exact path="/">
            <BlogPage>
              <PostListPage />
            </BlogPage>
          </Route>
          <Route path="/post/:postId">
            <BlogPage>
              <PostPage />
            </BlogPage>
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
      )}
    </div>
  );
}

export default App;
