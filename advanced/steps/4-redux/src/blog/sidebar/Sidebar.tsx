import React from "react";
import { linkToPost, formattedDate } from "../../utils";
import { Link } from "react-router-dom";

import useAppSelector from "useAppSelector";
import { selectedViewsPosts } from "blog/viewHistoryReducer";

type SidebarPost = {
  id: string;
  title: string;
  date: string;
};

export default function Sidebar() {
  return (
    <>
      <h1>View History</h1>
      <SidebarContent />
    </>
  );
}

function SidebarContent() {
  const viewedPosts = useAppSelector(selectedViewsPosts);

  return (
    <>
      {viewedPosts.map((p) => (
        <article key={p.id}>
          <p className="Date">{formattedDate(p.date)}</p>
          <Link to={linkToPost(p)}>
            <h1>{p.title}</h1>
            <p>{p.likes} Likes</p>
          </Link>
        </article>
      ))}
    </>
  );
}
