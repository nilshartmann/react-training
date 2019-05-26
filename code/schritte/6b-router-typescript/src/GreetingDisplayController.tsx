import React from "react";
import LinkButtonBar from "./LinkButtonBar";
import { RouteComponentProps } from "react-router";
import { Greeting } from "./types";
const BACKEND_URL = "http://localhost:7000/greetings";

type GreetingDisplayControllerProps = RouteComponentProps<{
  greetingId: string;
}>;

export default function GreetingDisplayController(props: GreetingDisplayControllerProps) {
  const [greeting, setGreeting] = React.useState<Greeting | null>(null);

  React.useEffect(() => {
    async function loadGreeting(greetingId: string) {
      setGreeting(null);
      try {
        const response = await fetch(`${BACKEND_URL}/${greetingId}`);
        const loadedGreeting = await response.json();
        setGreeting(loadedGreeting);
      } catch (err) {
        console.error("LOADING GREETINGS FAILED:", err);
        return;
      }
    }

    loadGreeting(props.match.params.greetingId);
  }, [props.match.params.greetingId]);

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
