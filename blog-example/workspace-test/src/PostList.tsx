import React from "react";
import moment from "moment";
import { BlogPost } from "./types";

// STEPS:

// 1. Add type information for 'date' argument in formattedDate
// 2. Create a type for the properties of PostList
//    Remember: PostList expects two Properties
//      - posts: array containing blog posts (you can use the type BlogPst from "./types.ts")
//      - onAddPost: callback function
// 3. Add the type to the PostList function signature

function formattedDate(date: any) {
  return moment(date).format("DD.MM.YYYY");
}

interface PostListProps {
  posts: BlogPost[];
  onAddPost: () => void;
}

export default function PostList({ posts, onAddPost }: PostListProps) {
  return (
    <>
      <button onClick={onAddPost}>Add Post</button>
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
