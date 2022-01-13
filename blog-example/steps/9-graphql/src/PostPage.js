import React from "react";
import Post from "./Post";
import { useParams, Link } from "react-router-dom";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:7000/posts/${postId}`)
      .then(response => response.json())
      .then(json => {
        setPost(json);
      })
      .catch(err => console.error("Loading data failed: " + err));
  }, [postId]);

  if (post) {
    return (
      <>
        <Link className="Button" to="/">
          Home
        </Link>
        <Post post={post} />
      </>
    );
  }

  return <h1>Please wait, Post is loading</h1>;
}
