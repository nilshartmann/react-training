import React from "react";
import { User } from "./types";

type SingleUserProps = {
  user: User;
};

export default function SingleUser({ user }: SingleUserProps) {
  return (
    <article className="Container">
      <h1>{user.name}</h1>
      <h3>Login: {user.login}</h3>
    </article>
  );
}
