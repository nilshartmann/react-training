import React from "react";

const defaultContext = {
  setAuthState(authState: AuthState) {},
  logout() {},
  authState: undefined
} as {
  setAuthState(authState: AuthState): void;
  logout(): void;
  authState: AuthState | null | undefined;
};

const AuthContext = React.createContext(defaultContext);
type AuthContextProviderProps = {
  children: React.ReactNode;
};

export type AuthState = {
  token: string;
  username: string;
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
        setAuthState: updateAuthorization,
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
