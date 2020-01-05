import React from "react";
import PostList from "./PostList";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { PostListQuery } from "./querytypes/PostListQuery";
import { assertDataPresent } from "./types";

const POST_LIST_QUERY = gql`
  query PostListQuery {
    posts {
      id
      title
      date
    }
  }
`;

export default function PostListPage() {
  const { loading, error, data } = useQuery<PostListQuery>(POST_LIST_QUERY, {
    fetchPolicy: "cache-and-network"
  });

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    return <h1>GraphQL Failed: {error.toString()}</h1>;
  }

  // data is either PostListQuery or undefined
  assertDataPresent(data);

  // data is now PostListQuery
  return <PostList posts={data.posts} />;
}
