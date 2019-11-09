import React from "react";
import CreatePostForm from "./CreatePostForm";

function Post({ post }) {
  return (
    <article className="Container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

function App() {
  const [posts, setPosts] = React.useState([]);

  // Den Server kannst Du starten, in dem Du in das Verzeichnis
  // blog-example/backend wechselst, und dort
  //    npm start
  // ausführst
  React.useEffect(() => {
    fetch("http://localhost:7000/posts")
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  function addPost(post) {
    fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(newPost => setPosts([newPost, ...posts]));
  }

  return (
    <div className="App">
      <header>
        <h1>React Hands-on</h1>
      </header>

      <CreatePostForm onAddPost={addPost} />
      {posts.map(p => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default App;
