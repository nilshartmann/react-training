import React from "react";
import { Switch, useHistory, Route, useParams } from "react-router";
import { Link } from "react-router-dom";

// In dieser Variante verwenden wir den React Router
// um Links zu den einzelnen Teilen der Anwendung zu bekommen.

// auf der ersten Seite (/) zeigen wir eine Liste aller Posts an (nur deren Titel)
// durch einen Klick kann man eine eigene Seite für den angeklickten Post öffnen
//

// ================================================================
// ===
// === Post-Komponente
// ===
// === Zeigt einen einzelnen Blog-Post an.
// === Der Blog-Post wird mit dem Property "post" übergeben
// ===
// ================================================================
function Post({ post }) {
  return (
    <article className="Container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
// ================================================================
// ===
// === AddPostForm-Komponente
// ===
// === Zeigt ein Formular zum Eingeben eines neuen Blog-Posts an
// ===
// === Wenn das Formular abgeschlossen wird, wird der eingegebene
// === Post als Objekt ({title: "...", body: "..."}) an die
// === übergebene onAddPost-Callback-Funktion übergeben.
// ===
// === Der Verwender der AddPostForm-Komponente muss also eine
// === Funktion "onAddPost" als Property übergeben, um auf das
// === Hinzufügen des Posts reagieren zu können
// ===
// ================================================================
function AddPostForm(props) {
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

function BlogList() {
  // Hier initialisieren wir jetzt den Zustand mit einem
  // leeren Array, da wir beim Starten der Anwendung und dem
  // initialen Rendern der Komponente noch keine Daten geladen
  // haben. Im allerersten Schritt wird somit zunächst eine leere
  // Liste angezeigt
  const [posts, setPosts] = React.useState([]);

  // Sobald die App-Komponente das erste Mal
  // gerendert wurde (also beim Start der Anwendung),
  // sollen automatisch die Daten geladen werden
  // Dazu registrieren wir einen "Effekt", da in der
  // Render-Phase der Komponente keine Nebeneffekte
  // verwendet werden dürfen
  React.useEffect(() => {
    fetch("http://localhost:7000/posts?short")
      .then(response => response.json())
      .then(json => {
        // Die Daten sind vom Server geladen
        // Hier setzen wir sie in den State der Komponente
        //  Die Komponente wird dann von React neu gerendert,
        // und die Posts werden angezeigt
        setPosts(json);
      });
  }, []);

  return posts.map(p => (
    <article key={p.id} className="Container">
      <Link to={`/post/${p.id}`}>
        <h1>{p.title}</h1>
      </Link>
    </article>
  ));
}

// Eine Komponente, die einen einzelnen Blog-Post darstellt
function BlogPost() {
  const { postId } = useParams();

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:7000/posts/${postId}`)
      .then(response => response.json())
      .then(json => {
        setPost(json);
      });
  }, [postId]);

  if (!post) {
    return <h1>Please wait, Blog Post is loading...</h1>;
  }

  return <Post post={post} />;
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

      <Switch>
        <Route path="/add">
          <AddPostForm onAddPost={addPost} />
        </Route>
        <Route exact path="/">
          <Link to="/add">Add new blog post</Link>
          <BlogList />
        </Route>
        <Route exact path="/post/:postId">
          <BlogPost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
