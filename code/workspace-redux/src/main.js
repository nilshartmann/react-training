import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { greetingReducer } from "./reducers";

import HelloMessage from "./HelloMessage";

ReactDOM.render(<HelloMessage />, document.getElementById("mount"));

// const store = createStore(
//   combineReducers({
//     greeting: greetingReducer
//   }),
//   composeWithDevTools(applyMiddleware(thunk))
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <HelloMessage />
//   </Provider>,
//   document.getElementById("mount")
// );
