import React from "react";
import FullPost from "./FullPost";
import { useParams, Link } from "react-router-dom";
import useApi from "../api/useReadApi";
import { assertDataPresent } from "../types";

export default function PostPage() {
  const { postId } = useParams();

  if (!postId) {
    throw new Error("Param PostId must be defined");
  }

  const { loading, error, data } = useApi(`http://localhost:7000/posts/${postId}`);

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    return <h1>Query Failed: {error.toString()}</h1>;
  }

  assertDataPresent(data);

  return (
    <>
      <Link className="Button" to="/">
        Home
      </Link>
      <FullPost post={data} />
    </>
  );
}
