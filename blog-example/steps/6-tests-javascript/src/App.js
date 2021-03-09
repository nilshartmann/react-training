import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";
import LoadingIndicator from "./LoadingIndicator";

function App() {
  const [view, setView] = React.useState("LIST");

  const [fetchState, setFetchState] = React.useState({});

  React.useEffect(() => {
    setFetchState({ loading: true });
    fetch("http://localhost:7000/posts")
      .then(response => response.json())
      .then(json => {
        setFetchState({ posts: json });
      })
      .catch(err => {
        setFetchState({ error: String(err) });
      });
  }, []);

  function savePost(post) {
    setFetchState({ posts: fetchState.posts, loading: true });
    fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(newPost => {
        setFetchState({ posts: [newPost, ...(fetchState.posts || [])] });
        setView("LIST");
      })
      .catch(err => console.error("Saving failed: " + err));
  }

  if (fetchState.loading) {
    return <LoadingIndicator>Server Request running. Please wait.</LoadingIndicator>;
  }

  if (view === "LIST") {
    return <PostList posts={fetchState.posts || []} onAddPost={() => setView("ADD")} />;
  }

  return <PostEditor onSavePost={savePost} />;
}

export default App;
