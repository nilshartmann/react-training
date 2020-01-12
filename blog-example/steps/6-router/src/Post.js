import React from "react";
import moment from "moment";
function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

export default function Post({ post }) {
  return (
    <article className="Container">
      <p className="Date">{formattedDate(post.date)}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
