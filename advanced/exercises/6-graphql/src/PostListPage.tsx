import React from "react";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import PostList from "./PostList";

// TODO 1:
// Define a GraphQL query that reads all needed data for the PostListPage
// with the gql tag function

// Fields needed from each post: id, title, teaser, date
// you can try the query in the GraphQL Playground http://localhost:4000

// After you have written your query with the gql function,
// generate the needed types for it:
//  npm run codegen
//
// you can also "npm run codegen:watch" that types will automatically
// by re-generated when you save a file

export default function PostListPage() {
  // TODO 2: Implement this component
  // ----------------------
  // Use useQuery to run your query
  // show a simple message when the data is loading or an error occured
  // if the data has been loaded successfully, pass it to PostList component
  return <PostList posts={[]} />;
}
