import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], loading: false },
  reducers: {
    postsLoading(state) {
      state.loading = true;
      state.error = null;
    },
    postLoadingFailed(state, action) {
      state.loading = false;
      return { error: action.playload.toString(), posts: [] };
    },
    postLoadingSucceeded(state, action) {
      return {
        posts: action.payload
      };
    },
    addPost(state, action) {
      state.posts.unshift(action.payload);
      state.loading = false;
      state.error = null;
    }
  }
});

export default postsSlice.reducer;
const { postsLoading, postLoadingFailed, postLoadingSucceeded, addPost } = postsSlice.actions;

export function loadPosts() {
  return dispatch => {
    dispatch(postsLoading());
    fetch("http://localhost:7000/posts?slow")
      .then(response => response.json())
      .then(json => {
        dispatch(postLoadingSucceeded(json));
      })
      .catch(err => {
        dispatch(postLoadingFailed(err));
      });
  };
}

export function savePost(post) {
  return dispatch => {
    dispatch(postsLoading());
    return fetch("http://localhost:7000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(newPost => {
        dispatch(addPost(newPost));
        // dispatch(openList());
      })
      .catch(err => dispatch(postLoadingFailed(err)));
  };
}
