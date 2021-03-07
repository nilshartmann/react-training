import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDraft, setDraftBody, setDraftTitle } from "../redux/editor-slice";

export default function PostEditor(props) {
  const dispatch = useDispatch();

  const title = useSelector(state => state.editor.title);
  const body = useSelector(state => state.editor.body);

  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  function clear() {
    dispatch(clearDraft());
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => dispatch(setDraftTitle(e.currentTarget.value))} />
      </label>
      {title ? (
        <Message type="info" msg="Title correctly filled"></Message>
      ) : (
        <Message type="error" msg="Please enter a title"></Message>
      )}

      <label>
        Body
        <textarea value={body} onChange={e => dispatch(setDraftBody(e.currentTarget.value))} />
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
          dispatch(clearDraft());
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
