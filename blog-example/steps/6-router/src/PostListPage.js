import React from "react";
import PostList from "./PostList";

export default function PostListPage(props) {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:7000/posts?short")
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      })
      .catch(err => console.error("Loading data failed: " + err));
  }, []);

  if (!posts.length) {
    return <h1>Loading, please wait...</h1>;
  }

  return <PostList onAdd={props.onAdd} posts={posts} />;
}
