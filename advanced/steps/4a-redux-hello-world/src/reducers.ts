import { combineReducers } from "redux";
import { UpdateBlogTitleAction, UpdateBlogBodyAction } from "actions";

type NewBlogPostState = {
  title: string;
  body: string;
};

const initialState = {
  title: "",
  body: ""
};

function newBlogPost(
  state: NewBlogPostState = initialState,
  action: UpdateBlogTitleAction | UpdateBlogBodyAction
): NewBlogPostState {
  switch (action.type) {
    case "UPDATE_BLOG_TITLE":
      return {
        ...state,
        title: action.newTitle
      };
    case "UPDATE_BLOG_BODY":
      return {
        ...state,
        body: action.newBody
      };
  }

  return state;
}

type CharCounterState = {
  bodyCount: number;
  titleCount: number;
};

const initialCharCounterState = {
  bodyCount: 0,
  titleCount: 0
};

function charCounter(
  state: CharCounterState = initialCharCounterState,
  action: UpdateBlogTitleAction | UpdateBlogBodyAction
): CharCounterState {
  switch (action.type) {
    case "UPDATE_BLOG_TITLE":
      return {
        ...state,
        titleCount: state.titleCount++
      };
    case "UPDATE_BLOG_BODY":
      return {
        ...state,
        bodyCount: state.bodyCount++
      };
  }

  return state;
}
const rootReducer = combineReducers({
  newBlogPost,
  charCounter
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
