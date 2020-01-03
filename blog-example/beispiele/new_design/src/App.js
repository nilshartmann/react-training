import React from "react";
import moment from "moment";

// ================================================================
// ===
// === AddPostPage-Komponente
// ===
// ===
// ================================================================
function PostEditor(props) {
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

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

function BlogListPage() {
  const [posts, setPosts] = React.useState([]);

  // useTitle("Blog Posts");

  React.useEffect(() => {
    fetch("http://localhost:7000/posts")
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      });
  }, []);

  return posts.map(p => (
    <article key={p.id} className="Container">
      <p className="Date">{formattedDate(p.date)}</p>
      <h1>{p.title}</h1>
      <p>{p.body}</p>
    </article>
  ));
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Training Blog</h1>
        <button>Add Post</button>
      </header>

      <main>
        {/* <BlogListPage /> */}
        <PostEditor onAddPost={null} />
      </main>

      {/* <Switch>
        <Route path="/add">
          <PostEditor onAddPost={addPost} />
        </Route>
        <Route exact path="/">
          <Link to="/add">Add new blog post</Link>
          <BlogListPage />
        </Route>
        <Route exact path="/post/:postId">
          <BlogPostPage />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
