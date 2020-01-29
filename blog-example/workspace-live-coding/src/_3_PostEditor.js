import React from "react";
import moment from "moment";

import mockPosts from "./mock";

// ======================================================================================================
//  POST EDITOR
// ======================================================================================================

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
        <input ref={titleRef} value={title} onChange={e => setTitle(e.currentTarget.value)} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      </label>

      <button disabled={cancelDisabled} onClick={clear}>
        Clear
      </button>
    </div>
  );
}

// ======================================================================================================
//  POST LIST
// ======================================================================================================

export function PostList(props) {
  const posts = props.posts;

  return (
    <>
      <button onClick={props.onAddPost}>Add Post</button>
      {posts.map(p => (
        <article key={p.id} className="Container">
          <p className="Date">{formattedDate(p.date)}</p>
          <h1>{p.title}</h1>
          <p>{p.body}</p>
        </article>
      ))}
    </>
  );
}

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}
