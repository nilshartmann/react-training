import React from "react";
import LoginForm from "./LoginForm";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import useWriteApi from "../api/useWriteApi";

type LoginErrorResponse = { error: string };
type LoginSuccessResponse = { token: string; user: { id: string; login: string; name: string } };

type LoginResponse = LoginErrorResponse | LoginSuccessResponse;

function isSuccess(response?: any): response is LoginSuccessResponse {
  return response && "token" in response;
}

export default function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const [mutate, { error }] = useWriteApi<LoginResponse>("http://localhost:7000/login");
  const { setAuthState } = useAuth();

  async function doLogin(login: string, password: string) {
    const { data } = await mutate({ login, password });

    if (!isSuccess(data)) {
      return;
    }

    const { token, user } = data;
    setAuthState({
      token: token,
      username: user.name
    });

    const redirectAfter = location.state?.redirectAfter || "/add";
    history.push(redirectAfter);
  }

  const errorMessage = error ? ("error" in error ? error.error : error.toString()) : null;

  return <LoginForm error={errorMessage} onLogin={doLogin} />;
}
