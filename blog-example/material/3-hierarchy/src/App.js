import React from "react";
import PostList from "./PostList";
import PostEditor from "./_PostEditor";
import mockPosts from "./mock";

function App() {
  const [posts, setPosts] = React.useState(mockPosts);
  const [view, setView] = React.useState("LIST");

  function savePost(post) {
    const newPosts = [
      {
        id: String(posts.length + 1),
        ...post
      },
      ...posts
    ];

    setPosts(newPosts);
    setView("LIST");
  }

  if (view === "LIST") {
    return <PostList posts={posts} onAddPost={() => setView("ADD")} />;
  }

  return <PostEditor onSavePost={savePost} />;
}

export default App;
