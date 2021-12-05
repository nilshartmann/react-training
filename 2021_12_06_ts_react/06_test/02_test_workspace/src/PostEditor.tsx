import React from "react";
import { NewBlogPost } from "./types";

interface PostEditorProps {
  initialTitle?: string;
  initialBody?: string;

  onSavePost(newPost: NewBlogPost): void;
}

export default function PostEditor({
  initialBody = "",
  initialTitle = "",
  onSavePost
}: PostEditorProps) {
  const [title, setTitle] = React.useState(initialTitle);
  const [body, setBody] = React.useState(initialBody);

  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  function clear() {
    setTitle("");
    setBody("");
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.currentTarget.value)} />
      </label>
      {title ? (
        <Message type="info" msg="Title correctly filled"></Message>
      ) : (
        <Message type="error" msg="Please enter a title"></Message>
      )}

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>
      {body ? (
        <Message type="info" msg="Body correctly filled"></Message>
      ) : (
        <Message msg="Please enter a body"></Message>
      )}

      <button disabled={clearDisabled} onClick={clear}>
        Clear
      </button>
      <button
        disabled={saveButtonDisabled}
        onClick={() => {
          onSavePost({
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

// TODO:
//   - add type for properties.
//     Remember:
//       - 'msg' is a mandatory string
//       - 'type' can only be 'error' or 'info'
//
//     The type for the 'style' const is 'React.CSSProperties'
interface MessageProps {
  msg: string;
  type?: "error" | "info";
}
function Message({ msg, type = "error" }: MessageProps) {
  const style: React.CSSProperties =
    type === "error" ? { color: "red", fontWeight: "bold" } : { color: "green" };

  return <p style={style}>{msg}</p>;
}
