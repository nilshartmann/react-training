import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

export default function Post({ post }) {
  return (
    <article className="Container">
      <Link className="Button" to="/">
        Home
      </Link>
      <p className="Date">{formattedDate(post.date)}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
