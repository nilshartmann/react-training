import React from "react";
import useTitle from "./useTitle";

export default function AddPostForm(props) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  useTitle("New Post - " + title);

  function onAdd() {
    return props.onAddPost({
      title,
      body
    });
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

      <button onClick={onAdd}>Add Post</button>
    </div>
  );
}
