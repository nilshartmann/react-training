import React from "react";

export default function PostEditor(props) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const titleRef = React.useRef();
  const cancelDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  function clear() {
    setTitle("");
    setBody("");
    titleRef.current.focus();
  }

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

      <button disabled={cancelDisabled} onClick={clear}>
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
