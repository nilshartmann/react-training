/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostListQuery
// ====================================================

export interface PostListQuery_posts {
  __typename: "BlogPost";
  id: string;
  title: string;
  /**
   * Returns the first n-th chars of the body
   */
  teaser: string | null;
  date: string;
}

export interface PostListQuery {
  posts: PostListQuery_posts[];
}
