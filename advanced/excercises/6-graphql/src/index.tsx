import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import AuthContextProvider, { withTokenFromStorage } from "./AuthContext";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  request: operation => {
    withTokenFromStorage(token =>
      operation.setContext({
        headers: {
          authorization: token
        }
      })
    );
  }
});

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
