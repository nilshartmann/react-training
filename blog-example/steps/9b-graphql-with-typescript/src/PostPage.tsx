import React from "react";
import Post from "./Post";
import { useParams, Link } from "react-router-dom";
import { usePostPageQuery } from "./generated/graphql";

export default function PostPage() {
  const { postId } = useParams<{ postId: string }>();

  const { loading, error, data } = usePostPageQuery({
    variables: {
      postId
    }
  });

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    return <h1>GraphQL Failed: {error.toString()}</h1>;
  }
  if (data && data.post) {
    return (
      <>
        <Link className="Button" to="/">
          Home
        </Link>
        <Post post={data.post} />
      </>
    );
  }

  return <h1>Please wait, Post is loading</h1>;
}
