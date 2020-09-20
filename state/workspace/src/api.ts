import { IUserData } from "./types";

type ApiState =
  | { status: "started"; user?: IUserData }
  | {
      error: string;
      user?: IUserData;
      status: "failed";
    }
  | { status: "finished"; user: IUserData };

type ApiCallStartedAction = {
  type: "apiCallStarted";
};
type ApiCallFinishedAction = {
  type: "apiCallFinished";
  userLoaded: IUserData;
};
type ApiCallFailedAction = { type: "apiCallFailed"; error: string };

type ApiAction = ApiCallStartedAction | ApiCallFinishedAction | ApiCallFailedAction;

export function apiReducer(state: ApiState, action: ApiAction): ApiState {
  switch (action.type) {
    case "apiCallStarted":
      return {
        user: state.user,
        status: "started"
      };
    case "apiCallFinished":
      return {
        status: "finished",
        user: action.userLoaded
      };
    case "apiCallFailed":
      return { status: "failed", user: state.user, error: action.error };
  }
}
