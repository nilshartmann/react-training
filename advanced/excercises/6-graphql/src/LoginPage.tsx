import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import LoginForm from "./LoginForm";
import { LoginMutation, LoginMutationVariables } from "./querytypes/LoginMutation";
import { useAuth } from "./AuthContext";
import { useHistory, useLocation } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      error
      token
      user {
        id
        name
      }
    }
  }
`;

export default function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const [mutate, { error, data }] = useMutation<LoginMutation, LoginMutationVariables>(
    LOGIN_MUTATION
  );

  const { setAuthState } = useAuth();

  async function doLogin(login: string, password: string) {
    const { data } = await mutate({
      variables: { login, password }
    });

    if (!data || !data.login || data.login.error) {
      return;
    }

    const { token, user } = data.login;
    setAuthState({
      token: token!,
      username: user!.name
    });

    const redirectAfter = location.state?.redirectAfter || "/add";
    history.push(redirectAfter);
  }

  const errorMessage = error ? error.toString() : data?.login?.error;

  return <LoginForm error={errorMessage} onLogin={doLogin} />;
}
