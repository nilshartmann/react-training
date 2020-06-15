import React from "react";
import PostList from "./PostList";
import useAppSelector from "useAppSelector";
import { useDispatch } from "react-redux";
import { loadPostsFromServer } from "blog/blogActions";

export default function PostListPageMain() {
  const { orderBy, direction, token } = useAppSelector((state) => ({
    orderBy: state.blogListOptions.sortBy,
    direction: state.blogListOptions.order,
    token: state.auth?.token,
  }));
  const posts = useAppSelector((state) => state.blog.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPostsFromServer(orderBy, direction, token));
  }, [dispatch, orderBy, token, direction]);

  return <PostList posts={posts} />;
}
