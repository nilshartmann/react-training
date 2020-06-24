import React from "react";

// TODO: add TypeScript typings

// 1. Rename this file to PostEditor.tsx
//    (you might have to re-run "npm start" afterwards. Cancel the running process with Ctrl+C)
//
// 2. Create a Type for the props object.
//    - Remeber: the props object consists of the entries:
//       - a callback - function called "onSave"
//       - initialTitle and initialBody (strings). Are they mandatory or optional?
//    - The 'onSave'-callback function takes one parameter: the new blog post
//      - The new Blog post consists of title and body (both strings).
//      - A type for new Blog post is already defined in "../types". You can import the type
//        using ES6 import as you would import a function or class

// 3. Add your type to the PostEditor function signature

export default function PostEditor(props) {
  const [title, setTitle] = React.useState(props.initialTitle || "");
  const [body, setBody] = React.useState(props.initialBody || "");

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
