import {
  ApiRequestStartAction,
  ApiRequestFailureAction,
  ApiRequestSuccessAction,
} from "./apiActions";

type ApiState = {
  loading: boolean;
  description: string | null;
  error: string | null;
};

const intialApiState: ApiState = {
  loading: false,
  description: null,
  error: null,
};

export default function apiReducer(
  state: ApiState = intialApiState,
  action: ApiRequestStartAction | ApiRequestFailureAction | ApiRequestSuccessAction
) {
  switch (action.type) {
    case "API_REQUEST_START":
      return {
        description: action.payload.description,
        loading: true,
        error: null,
      };
    case "API_REQUEST_SUCCESS":
      return { ...state, loading: false, error: null };
    case "API_REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error.toString(),
      };
    default:
  }

  return state;
}
