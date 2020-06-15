/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface LoginMutation_login {
  __typename: "LoginResult";
  error: string | null;
  token: string | null;
  user: LoginMutation_login_user | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  login: string;
  password: string;
}
