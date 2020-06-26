import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";
import LoadingIndicator from "./LoadingIndicator";

function App() {
  const [fetchState, setFetchState] = React.useState({
    loading: true,
    posts: []
  });
  const [view, setView] = React.useState("LIST");

  function loadPosts() {
    setFetchState({ loading: true });

    fetch("http://localhost:7000/posts?slow")
      .then(response => response.json())
      .then(json => {
        setFetchState({
          posts: json
        });
      })
      .catch(err => setFetchState({ error: JSON.stringify(err) }));
  }

  React.useEffect(() => {
    loadPosts();
  }, []);

  function savePost(post) {
    setFetchState({
      loading: true
    });
    fetch("http://localhost:7000/posts?slow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => {
        loadPosts();
        setView("LIST");
      })
      .catch(err => setFetchState({ error: JSON.stringify(err) }));
  }

  if (fetchState.loading) {
    return <LoadingIndicator>Loading Posts...</LoadingIndicator>;
  }

  if (fetchState.error) {
    return <h1>Loading Posts failed: {fetchState.error}</h1>;
  }

  if (view === "LIST") {
    return <PostList posts={fetchState.posts} onAddPost={() => setView("ADD")} />;
  }

  return <PostEditor onSavePost={savePost} />;
}

export default App;
