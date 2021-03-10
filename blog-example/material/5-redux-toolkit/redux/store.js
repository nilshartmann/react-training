import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./view-slice";
import editorReducer from "./editor-slice";
import postsReducer from "./posts-slice";
export default configureStore({
  reducer: {
    view: viewReducer,
    editor: editorReducer,
    posts: postsReducer
  }
});
