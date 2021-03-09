import React from "react";
import moment from "moment";

// 1. Render Phase Seiteneffekte VERBOTEN
// 2. Commit Phase Änderungen => Browser, Seiteneffekte ERLAUBT

export default function App(props) {
  const [view, setView] = React.useState("LIST");

  // const [posts, setPosts] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);

  const [postsState, setPostsState] = React.useState({
    posts: [],
    isLoading: true,
    error: null
  });

  // <App blogPostId={"post-7"} />
  // / <App blogPostId={"post-9"} />
  // / <App blogPostId={"post-10"} />

  // fetch-on-render

  // React.useEffect(() => {
  //   fetch("http://localhost:7000/posts")
  //     .then(response => response.json())
  //     .then(json => setPosts(json));
  // }, []);

  React.useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      setError(null);
      const response = await fetch("http://localhost:7000/posts/" + props.blogPostId);
      if (response.ok === false) {
        setPostsState({
          error: "Daten laden fehlgeschlagen!",
          posts: postsState.posts
        });
        // setError("Daten laden fehlgeschlagen!");
        // setIsLoading(false);
        // setError(null);
        return;
      }
      const json = await response.json();
      setPosts(json);
      setIsLoading(false);
    }

    loadPosts();
  }, [props.blogPostId]);

  function openEditor() {
    setView("ADD");
  }

  function addNewPost(newPost) {
    fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then(response => response.json())
      .then(savedPost => {
        const newBlogPosts = [savedPost, ...posts];
        setPosts(newBlogPosts);
        setView("LIST");
      });
  }

  if (isLoading) {
    return "Bitte warten Sie aus";
  }

  if (error) {
    return error;
  }

  if (view === "ADD") {
    return <PostEditor onSave={addNewPost} />;
  }

  return <PostList posts={posts} onAdd={openEditor} />;
}

// ======================================================================================================
//  POST EDITOR
// ======================================================================================================

function PostEditor(props) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  function clear() {
    setTitle("");
    setBody("");
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.currentTarget.value)} />
      </label>
      {title ? (
        <Message type="info" msg="Title correctly filled"></Message>
      ) : (
        <Message type="error" msg="Please enter a title"></Message>
      )}

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>
      {body ? (
        <Message type="info" msg="Body correctly filled"></Message>
      ) : (
        <Message msg="Please enter a body"></Message>
      )}

      <button disabled={clearDisabled} onClick={clear}>
        Clear
      </button>
      <button
        disabled={saveButtonDisabled}
        onClick={() =>
          props.onSave({
            title: title,
            body: body
          })
        }
      >
        Save Post
      </button>
    </div>
  );
}

function Message({ msg, type = "error" }) {
  const style = type === "error" ? { color: "red", fontWeight: "bold" } : { color: "green" };

  return <p style={style}>{msg}</p>;
}

// ======================================================================================================
//  POST LIST
// ======================================================================================================

export function PostList(props) {
  const posts = props.posts;

  return (
    <>
      <button onClick={props.onAdd}>Add Post</button>
      {posts.map(p => (
        <article key={p.id} className="Container">
          <p className="Date">{formattedDate(p.date)}</p>
          <h1>{p.title}</h1>
          <p>{p.body}</p>
        </article>
      ))}
    </>
  );
}

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}
