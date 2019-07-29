import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import HelloMessage from "./HelloMessage";

ReactDOM.render(<HelloMessage initialMessage="Hello" />, document.getElementById("mount"));

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
