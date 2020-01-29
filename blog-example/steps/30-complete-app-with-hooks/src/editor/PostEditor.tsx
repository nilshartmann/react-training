import React from "react";
import { NewBlogPost } from "../types";
import { useDraftPost } from "./DraftPostProvider";

type PostEditorProps = {
  onSavePost(post: NewBlogPost): void;
  error?: string | null | undefined;
};
export default function PostEditor(props: PostEditorProps) {
  const { draftTitle, setDraftTitle, draftBody, setDraftBody, clearDraft } = useDraftPost();

  function clear() {
    clearDraft();
  }

  const saveButtonDisabled = !draftTitle || !draftBody;

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={draftTitle} onChange={e => setDraftTitle(e.currentTarget.value)} />
      </label>

      <label>
        Body
        <textarea value={draftBody} onChange={e => setDraftBody(e.currentTarget.value)} />
      </label>

      {props.error && <p>{props.error}</p>}

      <button onClick={clear}>Clear</button>
      <button
        disabled={saveButtonDisabled}
        onClick={() => {
          clearDraft();
          props.onSavePost({
            title: draftTitle,
            body: draftBody
          });
        }}
      >
        Save Post
      </button>
    </div>
  );
}
