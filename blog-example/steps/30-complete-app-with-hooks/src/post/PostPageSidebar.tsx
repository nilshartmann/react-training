import React from "react";
import { useParams } from "react-router-dom";
import useReadApi from "../api/useReadApi";
import LoadingIndicator from "../LoadingIndicator";
import { assertDataPresent } from "../types";

export default function PostPageSidebar() {
  const { postId } = useParams();

  if (!postId) {
    throw new Error("Param PostId must be defined");
  }

  const { data, loading, error } = useReadApi(
    "http://localhost:7000/posts/" + postId + "/metadata"
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <p>Error while loading info</p>;
  }

  assertDataPresent(data);

  return (
    <article>
      <h1>Likes: {data.likes}</h1>
    </article>
  );
}
