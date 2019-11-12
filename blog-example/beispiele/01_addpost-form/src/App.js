import React from "react";

// ================================================================
// ===
// === AddPostForm-Komponente
// ===
// === Zeigt ein Formular zum Eingeben eines neuen Blog-Posts an
// ===
// ===
// ================================================================
function AddPostForm() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function onAdd() {
    console.log("Add pressed, current post: ", {
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

export default AddPostForm;
