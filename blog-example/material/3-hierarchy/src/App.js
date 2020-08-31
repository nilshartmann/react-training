import React from "react";
import PostList from "./PostList";
import mockPosts from "./mock";
import PostEditor from "../../../steps/4-remote/src/PostEditor";

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

  /*
      TODO:

      1. Add the add-Button in your PostEditor component 
            - the add-Button should invoke a callback function from the PostEditor's 
              properties (onSavePost). 
            - the callback function should take ONE argument, that is an OBJECT
              containing the new blog post with 'title' and 'body':
                onSavePost({ title: ..., body: ... });

      2. Add a callback function to your PostEditor
            - the callback function should add the new blog post to your list
            - You can modify the existing list like this: 
                const newState = [newPostFromPostEditor, ...posts];
                setPosts(newState);
    */

  return <PostEditor />;
}

export default App;
