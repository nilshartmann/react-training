import React from "react";
import { Redirect, Link } from "react-router-dom";
import PostEditor from "./PostEditor";
import useWriteApi from "../../api/useWriteApi";
import LoadingIndicator from "LoadingIndicator";
import useAppSelector from "useAppSelector";

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
  const [savePost, { loading, error, called }] = useWriteApi("http://localhost:7000/posts");
  const isAuthenticated = useAppSelector((state) => state.auth != null);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const errorMessage = error ? ("error" in error ? error.error : error.toString()) : null;

  if (called && !errorMessage) {
    return <SuccessConfirmation />;
  }

  if (loading) {
    return <LoadingIndicator>Saving....</LoadingIndicator>;
  }

  return <PostEditor onSavePost={savePost} error={errorMessage} />;
}
