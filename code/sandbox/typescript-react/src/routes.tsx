import * as React from "react";

import { hashHistory, IndexRoute, Route, Router } from "react-router";

import Frame from "./Frame";

import { HelloMessage } from "./greeting";

const Greeting = ({ params, location }) => {
  return (
    <div>
      <h1>Second page</h1>
      <h2>Params: {JSON.stringify(params)}</h2>
      <h2>Location: {JSON.stringify(location)}</h2>
    </div>
  );
};

let isLoggedIn: boolean = false;

const Login = ({ params, location }) => {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          isLoggedIn = true;
          const ref = decodeURIComponent(location.query.ref);
          hashHistory.replace(ref && "/");
        }}
      >
        Ich bin's
      </button>
    </div>
  );
};

const requireAuth = (nextState, replace) => {
  console.log("es geht");
  if (!isLoggedIn) {
    const oldPath = nextState.location.pathname + nextState.location.search;
    replace({
      pathname: "/login?ref=" + encodeURIComponent(oldPath)
    });
  }
};

const routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute component={HelloMessage} />
      <Route path="greet/:greeting" onEnter={requireAuth} component={Greeting} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

export default routes;
