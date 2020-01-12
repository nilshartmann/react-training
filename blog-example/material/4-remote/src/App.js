import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";

const BACKEND_URL = "http://localhost:7000/posts";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [view, setView] = React.useState("LIST");

  // TODO #1: Register an effect with 'React.useEffect':
  //   - the effect should read data from our API (http://localhost:7000/posts)
  //   - the data read from that endpoint matches the structure needed in our
  //     client, so you can just set the result to posts!
  //   - in case of an error, write the error to console.error
  //   - make sure that the effect runs ONLY ONCE!

  function savePost(post) {
    // TODO #2:
    // use fetch to store data on our endpoint (same URL as above but with POST),
    //  - make sure you set the correct Content-Type header ("application/json")
    //  - convert the post to JSON using JSON.stringify
    //  - the answer you receive is a new blog post.
    //  - add the blog post to the list of existing blogpost in the state
    //  - open the LIST view
    //
  }

  if (view === "LIST") {
    return <PostList posts={posts} onAddPost={() => setView("ADD")} />;
  }

  return <PostEditor onSavePost={savePost} />;
}

export default App;
