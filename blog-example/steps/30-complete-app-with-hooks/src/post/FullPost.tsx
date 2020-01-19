import React from "react";
import { formattedDate } from "utils";

type PostProps = {
  post: {
    id: string;
    date: string;
    title: string;
    user: {
      name: string;
    };
    body: string;
  };
};

export default function FullPost({ post }: PostProps) {
  return (
    <article className="Container">
      <p className="Date">{formattedDate(post.date)}</p>
      <h1>{post.title}</h1>
      <p>by {post.user.name}</p>
      {post.body.split("\\n").map((p, ix) => (
        <p key={`${post.id}_${ix}`}>{p}</p>
      ))}
    </article>
  );
}
