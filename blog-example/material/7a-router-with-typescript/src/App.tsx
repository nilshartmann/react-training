import React from "react";
import PostEditor from "./PostEditor";
import { NewBlogPost } from "./types";
import { useHistory, Switch, Route } from "react-router-dom";
import PostPage from "./PostPage";
import PostListPage from "./PostListPage";
import NotFoundPage from "./NotFound";
function App() {
  const history = useHistory();
  function savePost(post: NewBlogPost) {
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

      {/* 
      
      TODO: Fuege hier die Route fuer den Pfad zur Darstellung eines einzelnen Posts hinzu
            Die Pfade sehen aus wie z.B. "/post/P1" oder "/post/P2"

            - Der Teil, in dem die Post-Id (P1, P2, ...) steht muss variabel sein und "postId"
              heißen
            - Die Komponente, die gerendert werden soll, heisst "PostPage"
      */}

      <Route path="/add">
        <PostEditor onSavePost={savePost} />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
