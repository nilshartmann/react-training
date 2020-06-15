import { SetFilterByLikesAction, SetBlogListSortAction } from "./blogOptionActions";
import produce from "immer";
type BlogListOptions = {
  sortBy: "date" | "likes";
  order: "desc" | "asc";
  likes: number;
};

const defaultSortOptions: BlogListOptions = {
  sortBy: "date",
  order: "desc",
  likes: -1,
};

export function blogListOptionsReducer(
  state: BlogListOptions = defaultSortOptions,
  action: SetFilterByLikesAction | SetBlogListSortAction
) {
  switch (action.type) {
    case "SET_BLOGLIST_FILTER_BY_LIKES": {
      return { ...state, likes: action.likes };
    }
    case "SET_BLOGLIST_SORT": {
      return {
        ...state,
        sortBy: action.sortBy,
        order: action.direction,
      };
    }
    default:
      return state;
  }
}

export default function blogListOptionsReducerWithImmer(
  oldState: BlogListOptions = defaultSortOptions,
  action: SetFilterByLikesAction | SetBlogListSortAction
) {
  return produce(oldState, (state) => {
    switch (action.type) {
      case "SET_BLOGLIST_FILTER_BY_LIKES": {
        state.likes = action.likes;
        return;
      }
      case "SET_BLOGLIST_SORT": {
        state.sortBy = action.sortBy;
        state.order = action.direction;
      }
    }
  });
}
