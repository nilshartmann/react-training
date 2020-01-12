import React from "react";

export default function PostEditor() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const titleRef = React.useRef();
  const clearDisabled = !title && !body;

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
        <input ref={titleRef} value={title} onChange={e => setTitle(e.currentTarget.value)} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>

      <button disabled={clearDisabled} onClick={clear}>
        Clear
      </button>
    </div>
  );
}
