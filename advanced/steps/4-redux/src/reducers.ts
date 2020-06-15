import { combineReducers } from "redux";
import apiReducer from "./api/apiReducer";
import blogReducer from "blog/blogReducer";
import { viewHistoryReducer } from "blog/viewHistoryReducer";
import authReducer from "auth/authReducer";
import blogListOptionsReducer from "blog/blogOptionReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogListOptions: blogListOptionsReducer,
  blog: blogReducer,
  api: apiReducer,
  viewHistory: viewHistoryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
