import React from "react";
import { useAuth } from "./AuthContext";
import { useLocation, Link } from "react-router-dom";

type UserBadgeProps = {
  username: string;
  onLogout: () => void;
};

function UserBadge({ username, onLogout }: UserBadgeProps) {
  return (
    <span style={{ textAlign: "right" }}>
      Welcome, <b>{username}</b>
      <br />
      <button className="Link" onClick={onLogout}>
        Logout
      </button>
    </span>
  );
}

function LoginButton() {
  const location = useLocation();

  if ("/login" === location.pathname) {
    return (
      <Link className="Button" to="/">
        Home
      </Link>
    );
  }

  return (
    <Link
      className="Button"
      to={{
        pathname: "/login",
        state: {
          redirectAfter: "/"
        }
      }}
    >
      Login
    </Link>
  );
}

export default function AppHeader() {
  const { authState, logout } = useAuth();

  const username = authState?.username;

  return (
    <header>
      <Link to="/">
        <h1>React Training Blog</h1>
      </Link>
      {username ? <UserBadge username={username} onLogout={logout} /> : <LoginButton />}
    </header>
  );
}
