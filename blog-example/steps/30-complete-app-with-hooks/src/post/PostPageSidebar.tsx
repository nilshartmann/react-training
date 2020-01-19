import React from "react";
import { useParams } from "react-router-dom";
import useReadApi from "../api/useReadApi";
import LoadingIndicator from "../LoadingIndicator";
import { assertDataPresent } from "../types";
import { formattedDate } from "utils";
import { useAuth } from "AuthContext";

export default function PostPageSidebar() {
  const { postId } = useParams();
  const { authState } = useAuth();

  const currentUsername = authState?.username;

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
      <p>
        This post has been published at <b>{formattedDate(data.publishedAt)}</b> by{" "}
        {data.username === currentUsername ? <b className="You">you</b> : <b>{data.username}</b>}{" "}
        and already received <b>{data.likes}</b> likes
      </p>
    </article>
  );
}
