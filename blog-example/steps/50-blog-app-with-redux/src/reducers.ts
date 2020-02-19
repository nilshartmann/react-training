import { combineReducers } from "redux";
import {
  LoginAction,
  LogoutAction,
  SetDraftBodyAction,
  SetDraftTitleAction,
  ClearDraftAction
} from "actions";

type AuthState = {
  token: string;
  userId: string;
  username: string;
};

function authReducer(state: AuthState | null = null, action: LoginAction | LogoutAction) {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}

type DraftPost = {
  title: string;
  body: string;
};

const initalDraftPost = {
  title: "",
  body: ""
};

function draftPostReducer(
  state: DraftPost = initalDraftPost,
  action: SetDraftBodyAction | SetDraftTitleAction | ClearDraftAction
) {
  switch (action.type) {
    case "CLEAR_DRAFT":
      return initalDraftPost;
    case "SET_DRAFT_BODY":
      return { ...state, body: action.body };
    case "SET_DRAFT_TITLE":
      return { ...state, title: action.title };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  draftPost: draftPostReducer
  // votes: votesReducer,
  // api: apiReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
