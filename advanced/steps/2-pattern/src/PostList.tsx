import React from "react";
import moment from "moment";
import { BlogPost } from "./types";

function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type PostListProps = {
  posts: BlogPost[];
};

export default function PostList(props: PostListProps) {
  const posts = props.posts;

  return (
    <>
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
