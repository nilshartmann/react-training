import React from "react";
import { Switch, useHistory, Route } from "react-router";
import { Link } from "react-router-dom";
import BlogListPage from "./BlogListPage";
import BlogPostPage from "./BlogPostPage";
import AddPostForm from "./AddPostForm";

function App() {
  const history = useHistory();

  function addPost(post) {
    fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(_ => {
        history.push("/");
      });
  }

  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>React Blog</h1>
        </Link>
        <Link to="/add">
          <i className="fas fa-file-medical" />
        </Link>
      </header>

      <Switch>
        <Route path="/add">
          <AddPostForm onAddPost={addPost} />
        </Route>
        <Route exact path="/">
          <BlogListPage />
        </Route>
        <Route exact path="/post/:postId">
          <BlogPostPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
