import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as greetingReducer } from "./greeting";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export type State = {
  greeting: string;
};

const store = createStore(
  combineReducers({
    greeting: greetingReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
