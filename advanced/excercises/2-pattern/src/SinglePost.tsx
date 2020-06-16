import React from "react";
import { BlogPost } from "./types";
import moment from "moment";

function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type SinglePostProps = {
  post: BlogPost;
};

export default function SinglePost({ post }: SinglePostProps) {
  return (
    <article className="Container">
      <p className="Date">{formattedDate(post.date)}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
