import React from "react";
import PostList from "./PostList";
import { usePostListPageQuery } from "./generated/graphql";

export default function PostListPage() {
  const { loading, data, error } = usePostListPageQuery();

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    console.error(error);
    return <h1>Error! Loading failed!</h1>;
  }

  if (!data) {
    return <h1>No data found ???</h1>;
  }

  return <PostList posts={data.posts} />;
}
