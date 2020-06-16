import React from "react";
import { User } from "./types";

type SingleUserProps = {
  title: string;
  user: User;
};

export default function SingleUser({ user, title }: SingleUserProps) {
  return (
    <article className="Container">
      <h1>{title}</h1>
      <h1>{user.name}</h1>
      <h3>Login: {user.login}</h3>
    </article>
  );
}
