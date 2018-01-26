import { combineReducers } from "redux";

import { SET_GREETINGS, ADD_GREETING, SET_FILTER, SET_MODE, MODE_MASTER } from "./actions";

const greetings = (state = [], action) => {
  switch (action.type) {
    case SET_GREETINGS:
      return action.greetings;
    case ADD_GREETING:
      return [...state, action.greeting];
    default:
      return state;
  }
};

const mode = (state = MODE_MASTER, action) => {
  switch (action.type) {
    case SET_MODE:
      return action.mode;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  greetings,
  mode
  // TODO: we are missing the filter reducer here
});
