import React from "react";

type PostEditorProps = {
  onSavePost(): void;

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

      <button onClick={clear}>Clear</button>
      <button disabled={saveButtonDisabled} onClick={props.onSavePost}>
        Save Post
      </button>
    </div>
  );
}
