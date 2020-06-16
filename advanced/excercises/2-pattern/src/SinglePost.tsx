import React from "react";
import { BlogPost } from "./types";
import moment from "moment";

function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type SinglePostProps = {
  title: string;
  post: BlogPost;
};

export default function SinglePost({ title, post }: SinglePostProps) {
  return (
    <article className="Container">
      <h1>{title}</h1>
      <p className="Date">{formattedDate(post.date)}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
