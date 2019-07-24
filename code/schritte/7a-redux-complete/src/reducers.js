import { combineReducers } from "redux";

function greetingReducer(greetings = [], action) {
  switch (action.type) {
    case "SET_GREETINGS":
      greetings = [...action.greetings];
      return greetings;
    case "ADD_GREETING":
      return [...greetings, action.greeting];
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

function filterReducer(state = null, action) {
  switch (action.type) {
    case "SET_FILTER":
      const newFilter = action.filter;
      if (state === newFilter) {
        // reset filter when clicking again
        return null;
      } else {
        return newFilter;
      }
    default:
      return state;
  }
}

const appReducer = combineReducers({
  greetings: greetingReducer,
  filter: filterReducer,
  mode: modeReducer
});

export default appReducer;
