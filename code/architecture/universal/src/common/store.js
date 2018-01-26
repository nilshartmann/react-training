import { createStore, combineReducers } from "redux";

import { UPDATE_GREETING, RESET_GREETING } from "./actions";

function greetingReducer(state = "Hello", action) {
  switch (action.type) {
    case UPDATE_GREETING:
      return action.greeting;
    case RESET_GREETING:
      return "";
    default:
      return state;
  }
}
const initialState = typeof window !== "undefined" ? window.__INITIAL_STATE__ : undefined;

const store = createStore(
  combineReducers({
    greeting: greetingReducer
  }),
  initialState
);

export default store;
