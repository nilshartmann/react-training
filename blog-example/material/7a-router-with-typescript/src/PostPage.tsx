import React from "react";
import Post from "./Post";
import { useParams, Link } from "react-router-dom";
import { BlogPost } from "./types";

export default function PostPage() {
  const [post, setPost] = React.useState<BlogPost | null>(null);

  // TODO:
  //   Lies die Variable 'postId' aus den Parametern der URL aus (useParams-Hook)

  React.useEffect(
    () => {
      // Setze hier die vollständige URL (http://localhost:7000/posts/POST_ID) ein,
      // wobei "POST_ID" die Id aus der URL sein soll
      //
      fetch("")
        .then(response => response.json())
        .then(json => {
          setPost(json);
        })
        .catch(err => console.error("Loading data failed: " + err));
    },
    /* TODO: was muss hier in das Dependency Array? Damit der fetch-Aufruf
             zur "richtigen" Zeit ausgeführt wird?
    */
    []
  );

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
