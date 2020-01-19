import React from "react";
import { Link } from "react-router-dom";
import { linkToPost, formattedDate } from "../utils";

type PostListProps = {
  posts: Array<{
    id: string;
    date: string;
    title: string;
    teaser: string;
  }>;
};

export default function PostList(props: PostListProps) {
  const posts = props.posts;

  return (
    <>
      <Link className="Button" to="/add">
        Add Post
      </Link>
      {posts.map(p => (
        <Link key={p.id} to={linkToPost(p)}>
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
