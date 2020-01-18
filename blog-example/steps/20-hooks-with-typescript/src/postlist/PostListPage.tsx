import React from "react";
import PostList from "./PostList";
import { assertDataPresent } from "../types";
import useApi from "../api/useReadApi";

export default function PostListPage() {
  const { loading, error, data } = useApi("http://localhost:7000/posts");

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    return <h1>REST Request Failed: {error.toString()}</h1>;
  }

  // data is either PostListQuery or undefined
  assertDataPresent(data);

  // data is now PostListQuery
  return <PostList posts={data} />;
}
