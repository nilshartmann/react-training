import React from "react";
import { useAuth } from "../AuthContext";
import { Redirect, Link } from "react-router-dom";
import { NewBlogPost } from "../types";
import PostEditor from "./PostEditor";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import {
  NewBlogPostMutation,
  NewBlogPostMutationVariables,
} from "./querytypes/NewBlogPostMutation";

const NEW_BLOGPOST_MUTATION = gql`
  mutation NewBlogPostMutation($postData: NewBlogPost!) {
    newPost: createBlogPost(postData: $postData) {
      error
      blogPost {
        id
        title
        date
        body
        user {
          id
          name
        }
      }
    }
  }
`;

function SuccessConfirmation() {
  return (
    <div className="Container">
      <h1>Your new post have been saved.</h1>
      <Link className="Button" to="/">
        Home
      </Link>
    </div>
  );
}

export default function PostEditorPage() {
  const { authState } = useAuth();
  const [mutate, { error, data, called }] = useMutation<
    NewBlogPostMutation,
    NewBlogPostMutationVariables
  >(NEW_BLOGPOST_MUTATION);

  async function savePost(post: NewBlogPost) {
    mutate({
      variables: {
        postData: post,
      },
    });
  }
  if (!authState) {
    return <Redirect to="/login" />;
  }

  const errorMessage = error ? error.toString() : data?.newPost.error;

  if (called && !errorMessage) {
    return <SuccessConfirmation />;
  }

  return <PostEditor onSavePost={savePost} error={errorMessage} />;
}
