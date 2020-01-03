import React from "react";
import { useParams } from "react-router";
import Post from "./Post";
import { Link } from "react-router-dom";
import useTitle from "./useTitle";

export default // Eine Komponente, die einen einzelnen Blog-Post darstellt
function BlogPostPage() {
  const { postId } = useParams();

  const [post, setPost] = React.useState(null);

  useTitle(post ? post.title : "Please wait...");

  React.useEffect(() => {
    fetch(`http://localhost:7000/posts/${postId}`)
      .then(response => response.json())
      .then(json => {
        setPost(json);
      });
  }, [postId]);

  if (!post) {
    return <h1>Please wait, Blog Post is loading...</h1>;
  }

  return (
    <>
      <Post post={post} />
      <Link to="/">
        <i className="NavButton fas fa-arrow-alt-circle-left" />
      </Link>
    </>
  );
}
