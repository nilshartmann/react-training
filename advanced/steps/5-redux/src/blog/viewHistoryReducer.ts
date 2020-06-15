import { createSelector } from "reselect";
import { PostShownAction } from "./viewHistoryActions";
import { AppState } from "reducers";
import { BlogPostShort } from "types";

export type ViewHistoryState = {
  postsViewed: string[];
};

const selectViewedPostIds = (state: AppState) => state.viewHistory.postsViewed;
const selectAllPosts = (state: AppState) => state.blog.posts;

export const selectedViewsPosts = createSelector(
  [selectViewedPostIds, selectAllPosts],
  (viewedPostIds, allPosts) => {
    console.log("selectedViewsPosts called!");
    return viewedPostIds
      .map((id) => allPosts.find((p) => p.id === id))
      .filter((p) => p !== undefined) as BlogPostShort[];
  }
);

const defaultViewHistoryState: ViewHistoryState = {
  postsViewed: [],
};

export function viewHistoryReducer(state = defaultViewHistoryState, action: PostShownAction) {
  switch (action.type) {
    case "POST_SHOWN":
      if (state.postsViewed.length > 0 && state.postsViewed[0] === action.payload.postId) {
        return state;
      }
      return {
        postsViewed: [action.payload.postId].concat(
          state.postsViewed.filter((pId) => pId !== action.payload.postId)
        ),
      };
    default:
      return state;
  }
}
