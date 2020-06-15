import React from "react";
import PostList from "./PostList";
import { assertDataPresent } from "../types";
import useApi from "../api/useReadApi";
import LoadingIndicator from "../LoadingIndicator";

function PostListPageMain() {
  const { loading, error, data } = useApi("http://localhost:7000/posts");

  if (loading) {
    return <LoadingIndicator>Posts are loading. Please wait.</LoadingIndicator>;
  }

  if (error) {
    return <h1>REST Request Failed: {error.toString()}</h1>;
  }

  // data is either PostListQuery or undefined
  assertDataPresent(data);

  // data is now PostListQuery
  return <PostList posts={data} />;
}

export default function PostListPage() {
  return (
    <div>
      <PostListPageMain />
    </div>
  );
}
