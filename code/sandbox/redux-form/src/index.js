import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const dest = document.getElementById("mount");
const reducer = combineReducers({
  dummy: (state = [], action) => state,
  form: reduxFormReducer
});
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });

import SimpleForm from "./SimpleForm";
ReactDOM.render(
  <Provider store={store}>
    <SimpleForm onSubmit={showResults} />
  </Provider>,
  dest
);
