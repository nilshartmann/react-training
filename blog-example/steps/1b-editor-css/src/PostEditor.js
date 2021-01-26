import React from "react";

export default function PostEditor() {
  const [title, setTitle] = React.useState("");

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.currentTarget.value)} />
        {title ? (
          <p style={{ color: "green" }}>Title correctly filled</p>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>Please enter a title</p>
        )}
      </label>
    </div>
  );
}
