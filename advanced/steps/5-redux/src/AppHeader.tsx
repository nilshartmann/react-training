import React from "react";
import { useLocation, Link } from "react-router-dom";
import useAppSelector from "useAppSelector";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { LogoutAction } from "auth/authActions";

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
          redirectAfter: "/",
        },
      }}
    >
      Login
    </Link>
  );
}

export default function AppHeader() {
  const username = useAppSelector((state) => state.auth?.username);
  const dispatch = useDispatch<Dispatch<LogoutAction>>();

  function doLogout() {
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <header>
      <Link to="/">
        <h1>React Training Blog</h1>
      </Link>
      {username ? <UserBadge username={username} onLogout={doLogout} /> : <LoginButton />}
    </header>
  );
}
