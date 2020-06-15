import React from "react";
import FullPost from "./FullPost";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPostFromServer } from "blog/blogActions";
import useAppSelector from "useAppSelector";
import { BlogPost } from "types";
import { postShown } from "blog/viewHistoryActions";

export default function PostPage() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useAppSelector((state) => {
    return (
      state.blog.posts.find((candidate) => candidate.id === postId && "body" in candidate) || null
    );
  }) as BlogPost | null;

  if (!postId) {
    throw new Error("Param PostId must be defined");
  }

  React.useEffect(() => {
    dispatch(loadPostFromServer(postId));
    dispatch(postShown(postId));
  }, [dispatch, postId]);

  return (
    post && (
      <>
        <Link className="Button" to="/">
          Home
        </Link>
        <FullPost post={post} />
      </>
    )
  );
}
