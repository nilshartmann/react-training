export function login(token: string, userId: string, username: string) {
  return {
    type: "LOGIN",
    payload: {
      token,
      userId,
      username,
    },
  } as const;
}
export type LoginAction = ReturnType<typeof login>;

export function logout() {
  return {
    type: "LOGOUT",
  } as const;
}
export type LogoutAction = ReturnType<typeof logout>;
