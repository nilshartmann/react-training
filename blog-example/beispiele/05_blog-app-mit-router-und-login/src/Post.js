import React from "react";

import moment from "moment";

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

// ================================================================
// ===
// === Post-Komponente
// ===
// === Zeigt einen einzelnen Blog-Post an.
// === Der Blog-Post wird mit dem Property "post" übergeben
// ===
// ================================================================
export default function Post({ post }) {
  return (
    <article className="Container">
      {formattedDate(post.date)}
      <h1>{post.title}</h1>
      {post.body.split("\n").map((p, ix) => (
        <p key={ix}>{p}</p>
      ))}
    </article>
  );
}
