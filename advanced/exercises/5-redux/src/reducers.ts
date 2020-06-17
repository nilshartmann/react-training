import { combineReducers } from "redux";

// todo: implement the newBlogPost reducer
//   - the typeScript type for the state managed by that reducer
//     is in the Type NewBlogPostState below
//   - the reducer should handle UpdateBlogBodyAction and UpdateBlogTitleAction
//     to update the state accordingly
//   - for all other actions return the old state
type NewBlogPostState = {
  title: string;
  body: string;
};

function newBlogPost() {
  // todo implement
}

const rootReducer = combineReducers({ newBlogPost });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
