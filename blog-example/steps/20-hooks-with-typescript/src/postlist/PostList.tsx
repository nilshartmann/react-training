import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type PostListProps = {
  posts: Array<{
    id: string;
    date: string;
    title: string;
    teaser: string;
  }>;
};

export default function PostList({ posts }: PostListProps) {
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
            {p.teaser} <span>Read more</span>
          </article>
        </Link>
      ))}
    </>
  );
}
