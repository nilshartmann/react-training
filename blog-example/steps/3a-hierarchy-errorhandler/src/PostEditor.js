import React from "react";

export default function PostEditor(props) {
  const [title, setTitle] = React.useState(props.initialTitle || "");
  const [body, setBody] = React.useState(props.initialBody || "");

  const titleRef = React.useRef();
  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  if (title === "bad") {
    throw new Error("This is an unexpected error.");
  }

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
