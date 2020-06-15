import React from "react";

type PostProps = {
  post: {
    id: string;
    title: string;
    body: string;
  };
};

export default function FullPost({ post }: PostProps) {
  return (
    <article className="Container">
      <h1>{post.title}</h1>
      {post.body.split("\\n").map((p, ix) => (
        <p key={`${post.id}_${ix}`}>{p}</p>
      ))}
    </article>
  );
}
