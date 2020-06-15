import { BlogPost, BlogPostShort } from "types";
import {
  SetPostsAction,
  SetFullPostAction,
  UpdatePostLikesAction,
  TogglePostLikeAction,
} from "./blogActions";

type BlogState = {
  posts: Array<BlogPostShort | BlogPost>;
  options: { orderBy: string; direction: string; token?: string };
};

const defaultBlogState: BlogState = {
  posts: [],
  options: { orderBy: "", direction: "" },
};

export default function blogReducer(
  state = defaultBlogState,
  action: SetPostsAction | SetFullPostAction | UpdatePostLikesAction | TogglePostLikeAction
): BlogState {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.posts,
        options: action.options,
      };
    case "SET_FULL_POST":
      if (!state.posts.find((p) => p.id === action.payload.post.id)) {
        return {
          ...state,
          posts: [...state.posts, action.payload.post],
        };
      }
      return {
        ...state,
        posts: state.posts.map((oldPost) =>
          oldPost.id !== action.payload.post.id ? oldPost : action.payload.post
        ),
      };
    case "TOGGLE_POST_LIKE_ACTION": {
      return {
        ...state,
        posts: state.posts.map((oldPost) => {
          if (oldPost.id !== action.payload.postId) {
            return oldPost;
          }
          let newLikedBy = oldPost.likedBy.filter((l) => l !== action.payload.userId);
          let newLikes = oldPost.likes;
          if (newLikedBy.length === oldPost.likedBy.length) {
            newLikedBy.push(action.payload.userId);
            newLikes++;
          } else {
            newLikes--;
          }

          return { ...oldPost, likes: newLikes, likedBy: newLikedBy };
        }),
      };
    }
    case "UPDATE_POST_LIKES": {
      return {
        ...state,
        posts: state.posts.map((oldPost) =>
          oldPost.id === action.payload.postId
            ? {
                ...oldPost,
                likedBy: action.payload.likedBy,
                likes: action.payload.likes,
              }
            : oldPost
        ),
      };
    }
    default:
      return state;
  }
}
