import { combineReducers } from "redux";

function greetingReducer(greetings = [], action) {
  switch (action.type) {
    case "SET_GREETINGS":
      greetings = [...action.greetings];
      return greetings;
    default:
  }
  return greetings;
}

function modeReducer(mode = "MODE_MASTER", action) {
  switch (action.type) {
    case "SET_MODE":
      return action.mode;
    default:
  }

  return mode;
}

const appReducer = combineReducers({
  greetings: greetingReducer,
  mode: modeReducer
});

export default appReducer;
