import React from "react";

// In dieser Variante werden die Blog-Posts
// von einem Server gelesen und dort auch gespeichert
// Die Logik dazu befindet sich ausschließlich in der
// App-Komponente. Die anderne Komponenten sind unverändert

// Den "Blog-Server" kannst Du starten, in dem Du in das Verzeichnis
// blog-example/backend wechselst, und dort
//    npm start
// ausführst

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

// ================================================================
// ===
// === Zentrale App-Komponente
// ===
// === Diese Komponente enthält unsere Logik zum Verwalten der
// === Posts, also Laden, Speichern und Hinzufügen
// ===

function App() {
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
    fetch("http://localhost:7000/posts")
      .then(response => response.json())
      .then(json => {
        // Die Daten sind vom Server geladen
        // Hier setzen wir sie in den State der Komponente
        //  Die Komponente wird dann von React neu gerendert,
        // und die Posts werden angezeigt
        setPosts(json);
      });
  }, []);

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
      .then(newPost => {
        // Der Server liefert den kompletten neuen Blog-Post
        // samt einer generierten Id zurück, so dass wir diesen
        // einfach in die Liste der bestehenden Posts hinzufügen
        // können.
        // Auch hiernach wird die Komponente nun neu gerendert
        // so dass die aktualisierte Liste samt dem neuen Eintrag
        // dargestellt wird
        setPosts([newPost, ...posts]);
      });
  }

  // Hier hat sich gegenüber der ersten Variante nichts verändert:
  return (
    <div className="App">
      <header>
        <h1>React Hands-on</h1>
      </header>

      <AddPostForm onAddPost={addPost} />
      {posts.map(p => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default App;
