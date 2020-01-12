import React from "react";

export default function PostEditor() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const titleRef = React.useRef();
  const cancelDisabled = !title && !body;

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
      {/*
         Add the 'Save' button here.
          - The save button should invoke the callback function 'onSave',
            that the component receives in its properties
          - The save button should be disabled as long as at least one of the input fields is empty
          - The onSave callback function expects an object as the only parameter
            - The object must consist of two entries: 'title' and 'body'
      */}
    </div>
  );
}
