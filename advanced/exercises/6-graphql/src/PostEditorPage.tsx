import React from "react";
import { useAuth } from "./AuthContext";
import { Redirect, Link } from "react-router-dom";
import { NewBlogPost } from "./types";
import PostEditor from "./PostEditor";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import {
  NewBlogPostMutation,
  NewBlogPostMutationVariables
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

  // TODO: Add the useMutation call
  //       - You can find the Mutation above (NEW_BLOGPOST_MUTATION)
  //       - The TypeScript types for the Mutation are already generated
  //         NewBlogPostMutation and NewBlogPostMutationVariables
  //       - REMOVE THE FOLLOWING 'let' STATEMENT COMPLETLEY!
  //       - Extract all needed variables from the result instead:
  //           - mutate
  //           - error, data, called

  let error = "",
    data = { newPost: { error: "" } },
    called;

  if (!authState) {
    return <Redirect to="/login" />;
  }

  function savePost(post: NewBlogPost) {
    // TODO: Implement this function
    //       - It should call the 'mutate' function returned from useMutation
    //       - you have to set the correct variables ("postData")
  }

  const errorMessage = error ? error.toString() : data?.newPost.error;

  if (called && !errorMessage) {
    return <SuccessConfirmation />;
  }

  return <PostEditor onSavePost={savePost} error={errorMessage} />;
}
