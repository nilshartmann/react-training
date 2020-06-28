import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";
import { NewBlogPost, BlogPost } from "./types";
import { readPosts, writePosts } from "./api";
import LoadingIndicator from "./LoadingIndicator";

type VIEW = "LIST" | "ADD";

type FetchState = {
  posts?: BlogPost[];
  loading?: boolean;
  error?: string;
};

function App() {
  const [view, setView] = React.useState<VIEW>("LIST");

  const [fetchState, setFetchState] = React.useState<FetchState>({});

  React.useEffect(() => {
    setFetchState({ loading: true });
    readPosts()
      .then(json => {
        setFetchState({ posts: json });
      })
      .catch(err => {
        setFetchState({ error: String(err) });
      });
  }, []);

  function savePost(post: NewBlogPost) {
    setFetchState({ posts: fetchState.posts, loading: true });
    writePosts(post)
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
