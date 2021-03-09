import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";
import LoadingIndicator from "./LoadingIndicator";

function blogReducer(oldState, action) {
  switch (action.type) {
    case "loadingStarted":
      return { loading: true, posts: oldState.posts };
    case "loadingFinished":
      return { posts: action.loadedPosts };
    case "loadingFailed":
      return { error: true };
    case "addPost": {
      return { posts: [action.newPost, ...oldState.posts] };
    }
  }

  throw new Error("Invalid action!");
}

function App() {
  const [view, setView] = React.useState("LIST");

  const [fetchState, dispatch] = React.useReducer(blogReducer, { loading: true, posts: [] });

  React.useEffect(() => {
    dispatch({
      type: "loadingStarted"
    });
    fetch("http://localhost:7000/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: "loadingFinished",
          loadedPosts: json
        });
      })
      .catch(err => {
        dispatch({
          type: "loadingFailed"
        });
      });
  }, []);

  function savePost(post) {
    dispatch({
      type: "loadingStarted"
    });

    fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(savedPost => {
        dispatch({
          type: "addPost",
          newPost: savedPost
        });
        setView("LIST");
      })
      .catch(err => console.error("Saving failed: " + err));
  }

  if (fetchState.loading) {
    return <LoadingIndicator>Server Request running. Please wait.</LoadingIndicator>;
  }

  if (view === "LIST") {
    return <PostList posts={fetchState.posts} onAddPost={() => setView("ADD")} />;
  }

  return <PostEditor onSavePost={savePost} />;
}

export default App;
