// @flow

import { createStore, combineReducers, applyMiddleware } from "redux";
import greetingReducer from "./greetingReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export type State = {
  // covariance makes this read-only, effectively
  // https://flow.org/en/docs/frameworks/redux/
  // https://flow.org/blog/2016/10/04/Property-Variance/
  +greeting: string
};

// init ok
// let state: State = {
//     greeting: 'yo'
// };

// ERROR: write not ok
// object type. Covariant property `greeting` incompatible with contravariant use in
// state.greeting = 'hund';

const store = createStore(
  combineReducers({
    greeting: greetingReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
