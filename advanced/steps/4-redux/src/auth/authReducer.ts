import { LoginAction, LogoutAction } from "./authActions";

type AuthState = {
  token: string;
  userId: string;
  username: string;
};

export default function authReducer(
  state: AuthState | null = null,
  action: LoginAction | LogoutAction
) {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}
