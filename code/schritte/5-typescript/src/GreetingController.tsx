import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import LoadingIndicator from "./LoadingIndicator";
import useApi from "./useApi";
import { NewGreeting, Greeting } from "./types";

const BACKEND_URL = "http://localhost:7000/greetings";
type MODE = "MODE_MASTER" | "MODE_DETAIL";

export default function GreetingController() {
  const [mode, setMode] = React.useState<MODE>("MODE_MASTER");
  const [greetings, setGreetings, isLoading] = useApi<Greeting[]>(BACKEND_URL, []);

  async function addGreeting(greetingToBeAdded: NewGreeting) {
    let newGreeting: Greeting;
    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(greetingToBeAdded)
      });
      if (response.status !== 201) {
        throw new Error("Invalid status code: " + response.status);
      }
      newGreeting = await response.json();
    } catch (err) {
      console.error("LOADING GREETINGS FAILED:", err);
    }
    // add the new greetings to the list of all greetings
    // (create a new array for immutability)
    // use updater function (in setGreetings) to make sure
    // we get the latest 'greetings' value from state
    setGreetings(currentGreetings => [...currentGreetings, newGreeting]);
    setMode("MODE_MASTER");
  }

  if (mode === "MODE_MASTER") {
    console.log("isLoading", isLoading);
    if (isLoading) {
      return <LoadingIndicator />;
    }

    return (
      <GreetingMaster
        greetings={greetings}
        onAdd={() => {
          setMode("MODE_DETAIL");
        }}
      />
    );
  }

  return <GreetingDetail onSave={addGreeting} />;
}
