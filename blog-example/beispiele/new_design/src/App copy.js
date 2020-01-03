import React from "react";
import { Switch, useHistory, Route, useParams } from "react-router";
import { Link } from "react-router-dom";

// In dieser Variante verwenden wir den React Router
// um Links zu den einzelnen Teilen der Anwendung zu bekommen.

// auf der ersten Seite (/) zeigen wir eine Liste aller Posts an (nur deren Titel)
// durch einen Klick kann man eine eigene Seite für den angeklickten Post öffnen
// auch das Formular ist auf einer eigenen Seite (/add)
    </article>
  );
}
// ================================================================
// ===
// === AddPostPage-Komponente
// ===
// ===
// ================================================================
function AddPostPage(props) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function onAdd() {
    return props.onAddPost({
      title,
      body
    });
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.currentTarget.value)} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>

      <button onClick={onAdd}>Add Post</button>
    </div>
  );
}


function App() {
  const history = useHistory();

  function addPost(post) {
    // Hier fügen wir das neue Blog-Post nun nicht mehr
    // direkt in den State wie noch im 1. Schritt der Anwendung,
    // sondern speichern den neuen Blog-Eintrag auf dem Server
    //
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
        <h1>React Hands-on</h1>
      </header>

      <main></main>

      <Switch>
        <Route path="/add">
          <AddPostPage onAddPost={addPost} />
        </Route>
        <Route exact path="/">
          <Link to="/add">Add new blog post</Link>
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
