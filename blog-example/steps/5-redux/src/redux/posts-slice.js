const initialPostsState = {
  posts: []
};

function postsLoading() {
  return { type: "posts/loading" };
}

function postLoadingFailed(error) {
  return { type: "posts/loadingFailed", error: error.toString() };
}

function postLoadingSucceeded(postsLoaded) {
  return {
    type: "posts/loadingSucceeded",
    posts: postsLoaded
  };
}

function addPost(post) {
  return {
    type: "posts/add",
    post
  };
}

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

export default function postsReducer(state = initialPostsState, action) {
  switch (action.type) {
    case "posts/loading":
      return {
        loading: true,
        // preserve posts while loading
        posts: state.posts
      };
    case "posts/loadingFailed": {
      return {
        posts: [],
        error: action.error
      };
    }
    case "posts/add": {
      return { posts: [action.post, ...state.posts] };
    }

    case "posts/loadingSucceeded": {
      return {
        posts: action.posts
      };
    }
    default:
  }
  return state;
}
