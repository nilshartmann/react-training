import React from "react";
import moment from "moment";
import { PostPageQuery_post } from "./querytypes/PostPageQuery";
function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type PostProps = {
  post: PostPageQuery_post;
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
