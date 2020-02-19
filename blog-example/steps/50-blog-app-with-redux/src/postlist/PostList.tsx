import React from "react";
import { Link } from "react-router-dom";
import { linkToPost, formattedDate } from "../utils";
import useAppSelector from "useAppSelector";

type PostListProps = {
  posts: Array<{
    id: string;
    date: string;
    title: string;
    teaser: string;
    userId: string;
  }>;
};

function UserBadge() {
  return <div className="UserBadge">Your Post!</div>;
}

export default function PostList({ posts }: PostListProps) {
  const currentUserId = useAppSelector(state => state.auth?.userId);

  return (
    <>
      <Link className="Button" to="/add">
        Add Post
      </Link>
      {posts.map(p => (
        <Link key={p.id} to={linkToPost(p)}>
          <article className="Container">
            <p className="Date">{formattedDate(p.date)}</p>
            <header>
              <h1>{p.title}</h1>
              {currentUserId === p.userId && <UserBadge />}
            </header>
            {p.teaser} <span>Read more</span>
          </article>
        </Link>
      ))}
    </>
  );
}
