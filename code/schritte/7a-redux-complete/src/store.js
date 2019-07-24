import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import greetingApp from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(greetingApp, composeEnhancers(applyMiddleware(thunk)));
export default store;
