import { combineReducers, Reducer } from "redux";

import {
  SET_GREETINGS,
  ADD_GREETING,
  SET_FILTER,
  SET_MODE,
  SetGreetingsAction,
  SaveGreetingAction,
  SetFilterAction,
  SetModeAction
} from "./actions";

import { GreetingState, FilterState, ModeState, MODE_MASTER } from "./types";

const greetings: Reducer<GreetingState> = (state: GreetingState = [], action: SetGreetingsAction | SaveGreetingAction) => {
  switch (action.type) {
    case SET_GREETINGS:
      return action.greetings;
    case ADD_GREETING:
      return [...state, action.greeting];
    default:
      return state;
  }
};

const filter: Reducer<FilterState> = (state: FilterState = null, action: SetFilterAction) => {
  switch (action.type) {
    case SET_FILTER:
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
};

const mode: Reducer<ModeState> = (state: ModeState = MODE_MASTER, action: SetModeAction) => {
  switch (action.type) {
    case SET_MODE:
      return action.mode;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  greetings,
  filter,
  mode
});
