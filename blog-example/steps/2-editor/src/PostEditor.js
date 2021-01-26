import React from "react";

export default function PostEditor() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const clearDisabled = !title && !body;

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
        <p style={{ color: "green" }}>Title correctly filled</p>
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>Please enter a title</p>
      )}

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>
      {body ? (
        <p style={{ color: "green" }}>Body correctly filled</p>
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>Please enter a body</p>
      )}

      <button disabled={clearDisabled} onClick={clear}>
        Clear
      </button>
    </div>
  );
}
