import React from "react";
import LinkButtonBar from "./LinkButtonBar";
import LoadingIndicator from "./LoadingIndicator";
import useApi from "./useApi";
import { RouteComponentProps } from "react-router";
import { Greeting } from "./types";
const BACKEND_URL = "http://localhost:7000/greetings";

type GreetingDisplayControllerProps = RouteComponentProps<{
  greetingId: string;
}>;

const SLOW = ""; // "?slow";

export default function GreetingDisplayController(props: GreetingDisplayControllerProps) {
  const [greeting, _, isLoading] = useApi<Greeting | null>(
    `${BACKEND_URL}/${props.match.params.greetingId}${SLOW}`,
    null
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (!greeting) {
    return <h1>No Greeting loaded (yet)</h1>;
  }

  return (
    <>
      <p>
        Your personal greeting, <b>{greeting.name}</b>: <b>{greeting.greeting}</b>
      </p>
      <LinkButtonBar
        links={[{ title: "Home", target: "/" }, { title: "Add Greeting", target: "/add" }]}
      />
    </>
  );
}
