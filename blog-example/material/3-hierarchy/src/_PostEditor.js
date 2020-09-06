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

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>

      <button disabled={clearDisabled} onClick={clear}>
        Clear
      </button>
      <button>Save</button>
      {/*

        TODO: 
         Complete the 'Save' button handling here:
          - The save button should invoke the callback function 'onSave',
            that the component receives in its properties
          - The onSave callback function expects an OBJECT as the only parameter
            - The object must consist of two entries: 'title' and 'body'
      */}
    </div>
  );
}
