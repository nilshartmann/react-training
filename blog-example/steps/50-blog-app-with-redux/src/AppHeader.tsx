import React from "react";
import { useLocation, Link } from "react-router-dom";
import useAppSelector from "useAppSelector";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { LogoutAction, ClearDraftAction } from "actions";

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
  const username = useAppSelector(state => state.auth?.username);
  const hasDraft = useAppSelector(
    state => state.draftPost.title !== "" || state.draftPost.body !== ""
  );
  const dispatch = useDispatch<Dispatch<LogoutAction | ClearDraftAction>>();

  function doLogout() {
    dispatch({
      type: "LOGOUT"
    });
  }

  function doClearDraft() {
    return dispatch({
      type: "CLEAR_DRAFT"
    });
  }

  return (
    <header>
      <Link to="/">
        <h1>React Training Blog</h1>
      </Link>
      {username ? (
        <UserBadge
          username={username}
          onLogout={doLogout}
          onClearDraft={hasDraft ? doClearDraft : null}
        />
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
