import { BlogPost, BlogPostShort } from "types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "reducers";
import { ApiAction, apiRequestStart, apiRequestSuccess, apiRequestFailure } from "api/apiActions";
import { fetchJson, sendJson } from "api/backend";

function setPosts(
  posts: BlogPostShort[],
  options: { orderBy: string; direction: string; token?: string }
) {
  return {
    type: "SET_POSTS",
    options,
    posts,
  } as const;
}

export type SetPostsAction = ReturnType<typeof setPosts>;

function setFullPost(post: BlogPost) {
  return {
    type: "SET_FULL_POST",
    payload: {
      post,
    },
  } as const;
}

export type SetFullPostAction = ReturnType<typeof setFullPost>;

export function loadPostsFromServer(
  orderBy: string,
  direction: string,
  token?: string
): ThunkAction<void, AppState, void, ApiAction | SetPostsAction> {
  return (dispatch, getState) => {
    const { blog } = getState();
    if (
      blog.posts.length > 0 &&
      blog.options.orderBy === orderBy &&
      blog.options.direction === direction &&
      blog.options.token === token
    ) {
      return;
    }

    dispatch(apiRequestStart("Loading Posts"));
    fetchJson(`/posts?full&orderBy=${orderBy}&direction=${direction}`, token).then(
      (posts) => {
        dispatch(setPosts(posts, { orderBy, direction, token }));
        dispatch(apiRequestSuccess());
      },
      (error) => dispatch(apiRequestFailure(error))
    );
  };
}

export function loadPostFromServer(
  postId: string
): ThunkAction<void, AppState, void, ApiAction | SetFullPostAction> {
  return (dispatch, getState) => {
    const { blog } = getState();

    const post = blog.posts.find((p) => p.id === postId);
    if (post && "body" in post) {
      return post;
    }

    dispatch(apiRequestStart(`Loading Post ${postId}`));
    fetchJson(`/posts/${postId}`).then(
      (post) => {
        dispatch(setFullPost(post));
        dispatch(apiRequestSuccess());
      },
      (error) => dispatch(apiRequestFailure(error))
    );
  };
}

function updatePostLikes(postId: string, likes: number, likedBy: string[]) {
  return {
    type: "UPDATE_POST_LIKES",
    payload: {
      postId,
      likes,
      likedBy,
    },
  } as const;
}
export type UpdatePostLikesAction = ReturnType<typeof updatePostLikes>;

function togglePostLike(postId: string, userId: string) {
  return {
    type: "TOGGLE_POST_LIKE_ACTION",
    payload: {
      postId,
      userId,
    },
  } as const;
}

export type TogglePostLikeAction = ReturnType<typeof togglePostLike>;

export function toggleLikePost(
  postId: string
): ThunkAction<void, AppState, void, UpdatePostLikesAction | TogglePostLikeAction> {
  return (dispatch, getState) => {
    const { auth } = getState();

    if (!auth) {
      return;
    }

    // Optimistic
    dispatch(togglePostLike(postId, auth.userId));

    sendJson("post", `/posts/${postId}/like`, auth.token).then(
      (post) => {
        dispatch(updatePostLikes(postId, post.likes, post.likedBy));
      },
      (error) => console.error("Could not update post", error)
    );
  };
}
