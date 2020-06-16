import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";
import { NewBlogPost, BlogPost } from "./types";
import { readPosts, writePosts } from "./api";
import LoadingIndicator from "./LoadingIndicator";

type VIEW = "LIST" | "ADD";

function App() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [view, setView] = React.useState<VIEW>("LIST");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    readPosts()
      .then(json => {
        setLoading(false);
        setPosts(json);
      })
      .catch(err => console.error("Loading data failed: " + err));
  }, []);

  function savePost(post: NewBlogPost) {
    setLoading(true);
    writePosts(post)
      .then(newPost => {
        setLoading(false);
        setPosts([newPost, ...posts]);
        setView("LIST");
      })
      .catch(err => console.error("Saving failed: " + err));
  }

  if (loading) {
    return <LoadingIndicator>Posts are loading. Please wait.</LoadingIndicator>;
  }

  if (view === "LIST") {
    return <PostList posts={posts} onAddPost={() => setView("ADD")} />;
  }

  return <PostEditor onSavePost={savePost} />;
}

export default App;
