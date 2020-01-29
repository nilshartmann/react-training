import React from "react";
import { useAuth } from "./AuthContext";
import { useLocation, Link } from "react-router-dom";
import { useDraftPost } from "editor/DraftPostProvider";

type UserBadgeProps = {
  username: string;
  onLogout: () => void;
  onClearDraft: (() => void) | null;
};

function UserBadge({ username, onLogout, onClearDraft }: UserBadgeProps) {
  return (
    <span style={{ textAlign: "right" }}>
      Welcome, <b>{username}</b>
      <br />
      <button className="Link" onClick={onLogout}>
        Logout
      </button>
      {onClearDraft && (
        <button className="Link" style={{ marginLeft: "0.5rem" }} onClick={onClearDraft}>
          Clear Draft
        </button>
      )}
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
  const { hasDraft, clearDraft } = useDraftPost();

  const username = authState?.username;

  return (
    <header>
      <Link to="/">
        <h1>React Training Blog</h1>
      </Link>
      {username ? (
        <UserBadge
          username={username}
          onLogout={logout}
          onClearDraft={hasDraft ? clearDraft : null}
        />
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
