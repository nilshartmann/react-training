import React from "react";
import LoginForm from "./LoginForm";
import { useLocation } from "react-router-dom";
import useWriteApi from "../api/useWriteApi";
import LoadingIndicator from "LoadingIndicator";
import { useDispatch } from "react-redux";
import { login as loginAction, LoginAction } from "./authActions";
import { Dispatch } from "redux";
import { NavigateAction, navigateTo } from "navigateActions";

type LoginErrorResponse = { error: string };
type LoginSuccessResponse = { token: string; user: { id: string; login: string; name: string } };

type LoginResponse = LoginErrorResponse | LoginSuccessResponse;

function isSuccess(response?: any): response is LoginSuccessResponse {
  return response && "token" in response;
}

export default function LoginPage() {
  const location = useLocation();
  const [mutate, { error, loading }] = useWriteApi<LoginResponse>("http://localhost:7000/login");
  const dispatch = useDispatch<Dispatch<LoginAction | NavigateAction>>();

  async function doLogin(login: string, password: string) {
    const { data } = await mutate({ login, password });

    if (!isSuccess(data)) {
      return;
    }

    const { token, user } = data;
    dispatch(loginAction(token, user.id, user.name));

    const redirectAfter = location.state?.redirectAfter || "/add";
    dispatch(navigateTo(redirectAfter));
  }

  if (loading) {
    return <LoadingIndicator>Login... Please wait</LoadingIndicator>;
  }

  const errorMessage = error ? ("error" in error ? error.error : error.toString()) : null;

  return <LoginForm error={errorMessage} onLogin={doLogin} />;
}
