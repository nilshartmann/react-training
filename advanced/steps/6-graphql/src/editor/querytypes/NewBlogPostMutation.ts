/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { NewBlogPost } from "./../../global-query-types";

// ====================================================
// GraphQL mutation operation: NewBlogPostMutation
// ====================================================

export interface NewBlogPostMutation_newPost_blogPost_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface NewBlogPostMutation_newPost_blogPost {
  __typename: "BlogPost";
  id: string;
  title: string;
  date: string;
  body: string;
  user: NewBlogPostMutation_newPost_blogPost_user;
}

export interface NewBlogPostMutation_newPost {
  __typename: "CreateBlogPostResult";
  error: string | null;
  blogPost: NewBlogPostMutation_newPost_blogPost | null;
}

export interface NewBlogPostMutation {
  newPost: NewBlogPostMutation_newPost;
}

export interface NewBlogPostMutationVariables {
  postData: NewBlogPost;
}
