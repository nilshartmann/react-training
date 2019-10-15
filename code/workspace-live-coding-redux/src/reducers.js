import { combineReducers } from "redux";

function actionCountReducer(state = 0, action) {
  return ++state;
}

// TODO: Implementiere greetingReducer
// TODO: Der Reducer soll RESET_GREETING und UPDATE_GREETING behandeln
function greetingReducer() {}

const appReducer = combineReducers({
  actionCounter: actionCountReducer
});

export default appReducer;
