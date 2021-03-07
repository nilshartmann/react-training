import React from "react";

export default function PostEditor(props) {
  // lies title und body aus dem globalen state aus
  const title = "";
  const body = "";

  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  function clear() {
    // todo: dispatche eine Action, um den BlogPost zurück zu setzen
  }

  function handleTitleChange(newTitle) {
    // todo: dispatche eine Action, um den BlogPost zurück zu setzen
  }

  function handleBodyChange(newBody) {
    // todo: dispatche eine Action, um den BlogPost zurück zu setzen
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => handleTitleChange(e.currentTarget.value)} />
      </label>
      {title ? (
        <Message type="info" msg="Title correctly filled"></Message>
      ) : (
        <Message type="error" msg="Please enter a title"></Message>
      )}

      <label>
        Body
        <textarea value={body} onChange={e => handleBodyChange(e.currentTarget.value)} />
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
          const draft = { title, body };
          clear();
          props.onSavePost(draft);
        }}
      >
        Save Post
      </button>
    </div>
  );
}

function Message({ msg, type = "error" }) {
  const style = type === "error" ? { color: "red", fontWeight: "bold" } : { color: "green" };

  return <p style={style}>{msg}</p>;
}
