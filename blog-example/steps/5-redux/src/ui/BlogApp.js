import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";
import LoadingIndicator from "./LoadingIndicator";
import { useDispatch, useSelector } from "react-redux";
import { openEditor, openList } from "../redux/view-slice";
import { loadPosts, savePost } from "../redux/posts-slice";

export default function BlogApp() {
  const view = useSelector(state => state.view);
  const dispatch = useDispatch();

  const loading = useSelector(state => state.posts.loading);
  const posts = useSelector(state => state.posts.posts);

  React.useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  function save(newPost) {
    dispatch(savePost(newPost)).then(() => dispatch(openList()));
  }

  if (loading) {
    return <LoadingIndicator>Server Request running. Please wait.</LoadingIndicator>;
  }

  if (view === "LIST") {
    return <PostList posts={posts} onAddPost={() => dispatch(openEditor())} />;
  }

  return <PostEditor onSavePost={save} />;
}
