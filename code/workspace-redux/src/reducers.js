import { combineReducers } from "redux";

const initialGreetingatate = {
  requestRunning: false,
  error: null,
  greetings: []
};

function greetingReducer(state = initialGreetingatate, action) {
  switch (action.type) {
    case "API_REQUEST_START":
      return {
        ...state,
        requestRunning: true,
        requestDescription: action.description,
        error: null
      };
    case "API_REQUEST_SUCCESS":
      return {
        ...state,
        requestRunning: false,
        error: null
      };
    case "SET_GREETINGS":
      return {
        ...state,
        greetings: action.greetings
      };
    case "API_REQUEST_FAILURE":
      return {
        ...state,
        requestRunning: false,
        error: action.error
      };
    case "ADD_GREETING":
      return {
        ...state,
        greetings: [...state.greetings, action.greeting]
      };
    default:
  }
  return state;
}

function modeReducer(mode = "MODE_MASTER", action) {
  switch (action.type) {
    case "SET_MODE":
      return action.mode;
    default:
  }

  return mode;
}

// TODO:
// Implementiere den filterReducer
//  1. Der Filter "Teilzustand" soll nur aus dem Filter-String bestehen (oder null für keinen Filter
//     Der initiale Wert für den Teilzustand soll null sein
//  2. Der Reducer soll die Action vom Typ SET_FILTER verarbeiten
//  3. Wenn der in der Action übergebene neue Filter === dem vorherigen Filter ist
//     soll der Filter zurückgesetzt werden (null)

const appReducer = combineReducers({
  greetings: greetingReducer,
  mode: modeReducer

  // TODO: füge deinen Filter-Reducer hier hinzu
});

export default appReducer;
