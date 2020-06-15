import React from "react";
import LoginForm from "./LoginForm";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import useWriteApi from "../api/useWriteApi";
import LoadingIndicator from "LoadingIndicator";

type LoginErrorResponse = { error: string };
type LoginSuccessResponse = { token: string; user: { id: string; login: string; name: string } };

type LoginResponse = LoginErrorResponse | LoginSuccessResponse;

function isSuccess(response?: any): response is LoginSuccessResponse {
  return response && "token" in response;
}

export default function LoginPage() {
  const history = useHistory();
  const location = useLocation<{ redirectAfter?: string }>();
  const [mutate, { error, loading }] = useWriteApi<LoginResponse>("http://localhost:7000/login");
  const auth = useAuth();

  async function doLogin(login: string, password: string) {
    const { data } = await mutate({ login, password });

    if (!isSuccess(data)) {
      return;
    }

    const { token, user } = data;
    auth.login({
      token: token,
      username: user.name,
      userId: user.id
    });

    const redirectAfter = location.state?.redirectAfter || "/add";
    history.push(redirectAfter);
  }

  if (loading) {
    return <LoadingIndicator>Login... Please wait</LoadingIndicator>;
  }

  const errorMessage = error ? ("error" in error ? error.error : error.toString()) : null;

  return <LoginForm error={errorMessage} onLogin={doLogin} />;
}
