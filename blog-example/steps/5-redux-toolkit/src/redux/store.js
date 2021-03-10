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

// import { compose, createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import viewReducer from "./view-slice";
// import editorReducer from "./editor-slice";
// import postsReducer from "./posts-slice";

// const rootReducer = combineReducers({
//   view: viewReducer,
//   editor: editorReducer,
//   posts: postsReducer
// });

// // Redux Dev Tools: http://extension.remotedev.io/#12-advanced-store-setup
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
//   : compose;

// const middleware = applyMiddleware(thunk);
// const enhancer = composeEnhancers(middleware);

// const store = createStore(rootReducer, enhancer);
// export default store;
