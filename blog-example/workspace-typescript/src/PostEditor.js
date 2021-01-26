import React from "react";

// TODO: add TypeScript typings

// 1. Rename this file to PostEditor.tsx
//    (you might have to re-run "npm start" afterwards. Cancel the running process with Ctrl+C)
// 2. Create a Type for props for 'Message' (see below)
//
// 3. Create a Type for the props object for 'PostEditor'.
//    - Remeber: the props object consists of the entries:
//       - a callback - function called "onSave"
//    - The 'onSave'-callback function takes one parameter: the new blog post
//      - The new Blog post consists of title and body (both strings).
//      - A type for new Blog post is already defined in "../types". You can import the type
//        using ES6 import as you would import a function or class

// 3. Add your type to the PostEditor function signature
import React from "react";

export default function PostEditor(props) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

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

// TODO:
//   - add type for properties.
//     Remember:
//       - 'msg' is a mandatory string
//       - 'type' can only be 'error' or 'info'
//
//     The type for the 'style' const is 'React.CSSProperties'
function Message({ msg, type = "error" }) {
  const style = type === "error" ? { color: "red", fontWeight: "bold" } : { color: "green" };

  return <p style={style}>{msg}</p>;
}
