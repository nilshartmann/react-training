import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { PostListQuery_posts } from "./querytypes/PostListQuery";

function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type PostListProps = {
  posts: PostListQuery_posts[];
};

export default function PostList(props: PostListProps) {
  const posts = props.posts;

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
