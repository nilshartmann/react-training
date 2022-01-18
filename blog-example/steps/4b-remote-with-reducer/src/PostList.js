import React from "react";
import moment from "moment";

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

export default function PostList({ posts, onAddPost }) {
  return (
    <>
      <button onClick={onAddPost}>Add Post</button>
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
