import React from "react";
import { NewBlogPost } from "./types";

type PostEditorProps = {
  onSavePost(post: NewBlogPost): void;

  initialTitle?: string;
  initialBody?: string;
};

export default function PostEditor(props: PostEditorProps) {
  const [title, setTitle] = React.useState(props.initialTitle || "");
  const [body, setBody] = React.useState(props.initialBody || "");

  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  function clear() {
    setTitle("");
    setBody("");

    if (titleRef.current) {
      titleRef.current.focus();
    }
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} ref={titleRef} onChange={e => setTitle(e.currentTarget.value)} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>

      <button disabled={clearDisabled} onClick={clear}>
        Clear
      </button>
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
