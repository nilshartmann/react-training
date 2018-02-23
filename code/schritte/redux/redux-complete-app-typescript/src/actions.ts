import { AppState, Greetings, Greeting, NewGreeting, GreetingId, Mode, MODE_MASTER } from "./types";
import { loadGreetingsFromServer, saveGreetingToServer } from "./greeting-backend";

import { ThunkAction } from "redux-thunk";

export const SET_GREETINGS = "SET_GREETINGS";
export const ADD_GREETING = "ADD_GREETING";
export const SET_FILTER = "SET_FILTER";
export const SET_MODE = "SET_MODE";

export type SetGreetingsAction = {
  type: typeof SET_GREETINGS;
  greetings: Greetings;
};

export type SaveGreetingAction = {
  type: typeof ADD_GREETING;
  greeting: Greeting;
};

export type SetFilterAction = {
  type: typeof SET_FILTER;
  filter: string;
};

export type SetModeAction = {
  type: typeof SET_MODE;
  mode: Mode;
};

// Thunk actions: https://github.com/gaearon/redux-thunk/issues/103#issuecomment-298533925
export const loadGreetings = (): ThunkAction<Promise<SetGreetingsAction | void>, AppState> => (dispatch, getState) => {
  return loadGreetingsFromServer()
    .then(greetings =>
      dispatch({
        type: SET_GREETINGS,
        greetings
      } as SetGreetingsAction)
    )
    .catch(err => console.error("LOADING GREETINGS FAILED:", err));
};
export const saveGreeting = (
  newGreeting: NewGreeting
): ThunkAction<Promise<SaveGreetingAction | void>, AppState, null> => dispatch =>
  saveGreetingToServer(newGreeting)
    .then(id => {
      const newGreetingWithId: SaveGreetingAction = {
        type: ADD_GREETING,
        greeting: {
          id,
          ...newGreeting
        }
      };
      dispatch(newGreetingWithId);
      dispatch(setMode(MODE_MASTER));
      return newGreetingWithId;
    })
    .catch(err => console.error("SAVING OF GREETING FAILED:", err));

export const setFilter = (filter: string): SetFilterAction => ({
  type: SET_FILTER,
  filter
});

export const setMode = (mode: Mode): SetModeAction => ({
  type: SET_MODE,
  mode
});
