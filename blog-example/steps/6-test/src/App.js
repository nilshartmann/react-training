import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [view, setView] = React.useState("LIST");

  React.useEffect(() => {
    fetch("http://localhost:7000/posts")
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      })
      .catch(err => console.error("Loading data failed: " + err));
  }, []);

  function savePost(post) {
    fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(newPost => {
        setPosts([newPost, ...posts]);
        setView("LIST");
      })
      .catch(err => console.error("Saving failed: " + err));
  }

  if (view === "LIST") {
    return <PostList posts={posts} onAddPost={() => setView("ADD")} />;
  }

  return <PostEditor onSavePost={savePost} />;
}

export default App;
