import React from "react";
import PostList from "./PostList";
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

  /*
      TODO:

      1. Return your existing PostEditor component here (instead of null)
          - Add a callback function to your PostEditor that invokes the "savePost"-function (see above)
            when add is clicked in the PostEditor

      2. Add the add-Button in your PostEditor component 

      Optional:

      3. Add a cancel button to your PostEditor that closes the Editor and displays the
         List again (don't save any data)

    */

  return null;
}

export default App;
