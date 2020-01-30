import { compose, createStore, applyMiddleware, Middleware, Dispatch } from "redux";
import { History } from "history";

import reducer from "./reducers";
import { NavigateAction } from "actions";

// Redux Dev Tools: http://extension.remotedev.io/#12-advanced-store-setup
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
  : compose;

export default function configureStore(history: History) {
  const middleware = applyMiddleware(createRouterMiddleware(history));
  const enhancer = composeEnhancers(middleware);

  return createStore(reducer, enhancer);
}

function createRouterMiddleware(history: History) {
  const routerMiddleware: Middleware = store => (next: Dispatch) => (action: NavigateAction) => {
    if (action.type === "HISTORY_PUSH") {
      history.push(action.location);
      return;
    }

    console.log("action", action);

    return next(action);
  };

  return routerMiddleware;
}
