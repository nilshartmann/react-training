import React from "react";
import LinkButtonBar from "./LinkButtonBar";
import LoadingIndicator from "./LoadingIndicator";
import useApi from "./useApi";
const BACKEND_URL = "http://localhost:7000/greetings";

const SLOW = ""; // "?slow";

export default function GreetingDisplayController(props) {
  const [greeting, _, isLoading] = useApi(`${BACKEND_URL}/${props.match.params.greetingId}${SLOW}`);

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
