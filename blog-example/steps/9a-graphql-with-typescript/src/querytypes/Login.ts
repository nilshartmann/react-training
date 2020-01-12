/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface Login_login {
  __typename: "LoginResult";
  error: string | null;
  token: string | null;
  user: Login_login_user | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  login: string;
  password: string;
}
