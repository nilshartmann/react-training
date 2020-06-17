import React from "react";

type PostEditorProps = {
  onSavePost(): void;
};

// todo:
//   - after implementing the action creators, remove the state here
//   - add useSelector calls to select the title and body from the redux store
//   - dispatch your updateBlogPostTitle and updateBlogBodyActions when
//     the input fields change
export default function PostEditor(props: PostEditorProps) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function updateTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }

  function updateBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBody(e.currentTarget.value);
  }

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
        <input value={title} onChange={updateTitle} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={updateBody} />
      </label>

      <button onClick={clear}>Clear</button>
      <button disabled={saveButtonDisabled} onClick={props.onSavePost}>
        Save Post
      </button>
    </div>
  );
}
