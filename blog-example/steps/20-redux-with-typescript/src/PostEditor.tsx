import React from "react";
import { NewBlogPost } from "./types";

type PostEditorProps = {
  onSavePost(post: NewBlogPost): void;
  error?: string | null | undefined;

  initialTitle?: string;
  initialBody?: string;
};

export default function PostEditor(props: PostEditorProps) {
  const [title, setTitle] = React.useState(props.initialTitle || "");
  const [body, setBody] = React.useState(props.initialBody || "");

  function clear() {
    setTitle("");
    setBody("");
  }

  const saveButtonDisabled = !title || !body;

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.currentTarget.value)} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>

      {props.error && <p>{props.error}</p>}

      <button onClick={clear}>Clear</button>
      <button
        disabled={saveButtonDisabled}
        onClick={() => {
          props.onSavePost({
            title,
            body
          });
        }}
      >
        Save Post
      </button>
    </div>
  );
}
