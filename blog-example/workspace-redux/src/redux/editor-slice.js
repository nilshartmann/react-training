const initalDraftPost = {
  title: "",
  body: ""
};

export function clearDraft() {
  return {
    type: "editor/clearDraft"
  };
}

export function setDraftBody(body) {
  return {
    type: "editor/setDraftBody",
    body
  };
}

export function setDraftTitle(title) {
  return {
    type: "editor/setDraftTitle",
    title
  };
}

export default function editorReducer(state = initalDraftPost, action) {
  switch (action.type) {
    case "editor/clearDraft":
      return initalDraftPost;
    case "editor/setDraftBody":
      return { ...state, body: action.body };
    case "editor/setDraftTitle":
      return { ...state, title: action.title };
    default:
      return state;
  }
}
