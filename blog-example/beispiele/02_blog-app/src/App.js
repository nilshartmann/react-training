import React from "react";
import mockPosts from "./mock";

// Diese Datei enthält alle Komponenten der Blog-Post-Anwendung
// - In einer "echten" React-Anwendung würden die Komponenten u.U.
//   in einzelne Module wandern
// - Die initialen Blog-Posts kommen aus dem mock-Modul (noch kein Server)
//   und neue Blog-Posts werden auch nur auf dem Client "gespeichert"
// - Ein bisschen CSS ist schon in der index.css-Datei definiert

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
  const [posts, setPosts] = React.useState(mockPosts);

  // Diese Funktion wird aufgerufen, wenn im
  // AddPostForm-Formular ein neues Blog-Post
  // eingegeben und auf "Add" gedrückt wurde
  function addPost(post) {
    const postWithId = {
      ...post,
      id: posts.length + 1 // Pseudo-Id Vergabe
    };

    // Wir erzeugen eine neue Liste mit Blog-Posts
    // Das neue Blog-Post soll als ersten Eintrag hinzugefügt
    // werden.
    const newPosts = [postWithId, ...posts];
    //
    // Wir setzen den State neu, was dazu führt, dass die
    // App-Komponente neu gerendert wird (also diese App-Funktion
    // wird neu ausgeführt) und das neue Blog-Posts wird sichtbar
    setPosts(newPosts);
  }

  return (
    <div className="App">
      <header>
        <h1>React Hands-on</h1>
      </header>

      {/* Formular anzeigen */}
      <AddPostForm onAddPost={addPost} />

      {/* List der Blog-Posts darstellen */}
      {posts.map(p => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default App;
