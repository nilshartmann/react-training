/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQuery
// ====================================================

export interface PostQuery_post_user {
  __typename: "User";
  name: string;
}

export interface PostQuery_post {
  __typename: "BlogPost";
  id: string;
  title: string;
  date: string;
  body: string;
  user: PostQuery_post_user;
}

export interface PostQuery {
  post: PostQuery_post | null;
}

export interface PostQueryVariables {
  postId: string;
}
