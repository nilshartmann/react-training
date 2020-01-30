import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFound";
import AppHeader from "./AppHeader";
import LoadingIndicator from "LoadingIndicator";
import { slowImport } from "api/demo-helper";

const PostEditorPage = React.lazy(() =>
  slowImport(() => import(/* webpackChunkName: "PostEditorPage" */ "./editor/PostEditorPage"))
);
const PostListPage = React.lazy(() =>
  slowImport(() => import(/* webpackChunkName: "PostListPage" */ "./postlist/PostListPage"))
);
const PostPage = React.lazy(() =>
  slowImport(() => import(/* webpackChunkName: "PostPage" */ "./post/PostPage"))
);
const LoginPage = React.lazy(() =>
  slowImport(() => import(/* webpackChunkName: "LoginPage" */ "./login/LoginPage"))
);

function App() {
  return (
    <div className="App">
      <AppHeader />
      <React.Suspense fallback={<LoadingIndicator>App is loading...</LoadingIndicator>}>
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
      </React.Suspense>
    </div>
  );
}

export default App;
