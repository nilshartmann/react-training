import React from "react";
import { linkToPost, formattedDate } from "../utils";
import { Link } from "react-router-dom";
import useReadApi from "../api/useReadApi";
import LoadingIndicator from "../LoadingIndicator";
import { assertDataPresent } from "../types";

type SidebarPost = {
  id: string;
  title: string;
  date: string;
};

export default function PostListSidebar() {
  const { data: posts, loading, error } = useReadApi<SidebarPost[]>(
    "http://localhost:7000/most-liked-posts"
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <p>Error while loading posts</p>;
  }

  assertDataPresent(posts);

  return (
    <>
      {posts.map(p => (
        <article key={p.id}>
          <p className="Date">{formattedDate(p.date)}</p>
          <Link to={linkToPost(p)}>
            <h1>{p.title}</h1>
          </Link>
        </article>
      ))}
    </>
  );
}
