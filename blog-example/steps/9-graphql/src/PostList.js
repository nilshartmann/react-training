import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

export default function PostList({ posts }) {
  return (
    <>
      <Link className="Button" to="/add">
        Add Post
      </Link>
      {posts.map(p => (
        <Link key={p.id} to={`/post/${p.id}`}>
          <article className="Container">
            <p className="Date">{formattedDate(p.date)}</p>
            <h1>{p.title}</h1>
            <p>{p.teaser}</p>
          </article>
        </Link>
      ))}
    </>
  );
}
