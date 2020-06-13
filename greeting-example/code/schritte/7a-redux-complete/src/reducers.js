import { combineReducers } from "redux";

const initialGreetingatate = {
  requestRunning: false,
  error: null,
  greetings: []
};

// Note on this reducer:
// - it is implemented as verbose as possible to make it as easy as possible to understand
// - if there are no greetings in our app, "normally" we probably would set greetings to
//   null/undefined and not to an empty array (rather have a selector that returns null or []
//   as needed by the consumer). Again this is to make the app as easy as possible
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
