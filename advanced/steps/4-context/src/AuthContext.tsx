import React from "react";

export type AuthState = {
  token: string;
  userId: string;
  username: string;
};

type IAuthContext = {
  login(authState: AuthState): void;
  logout(): void;
  authState: AuthState | null | undefined;
};

const defaultContext: IAuthContext = {
  login(authState: AuthState) {},
  logout() {},
  authState: undefined
};

const AuthContext = React.createContext<IAuthContext>(defaultContext);
type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AUTH_KEY = "blog.auth";

function readAuthStateFromStorage() {
  try {
    const currentAuthState = localStorage.getItem(AUTH_KEY);
    if (currentAuthState) {
      return JSON.parse(currentAuthState) as AuthState;
    }
  } catch (err) {
    console.error("Reading Local Storage failed: " + err, err);
  }

  return null;
}

type WithTokenFromStorageFn = (token: string) => void;
export function withTokenFromStorage(fn: WithTokenFromStorageFn) {
  const token = readAuthStateFromStorage()?.token;
  if (token) {
    fn(token);
  }
}

function updateAuthStateInStorage(newAuthState: AuthState | null | undefined) {
  if (newAuthState) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(newAuthState));
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [localState, setLocalState] = React.useState<AuthState | null | undefined>(
    readAuthStateFromStorage
  );

  function updateAuthorization(newAuth: AuthState | null | undefined) {
    updateAuthStateInStorage(newAuth);

    // re-render with new value
    setLocalState(newAuth);
  }

  function doLogout() {
    updateAuthorization(null);
  }

  return (
    <AuthContext.Provider
      value={{
        authState: localState,
        login: updateAuthorization,
        logout: doLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = React.useContext(AuthContext);

  return value;
}
