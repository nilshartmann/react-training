import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import LoadingIndicator from "./LoadingIndicator";
import useApi from "./useApi";
import { NewGreeting, Greeting } from "./types";
import { RouteComponentProps, Route } from "react-router";

const BACKEND_URL = "http://localhost:7000/greetings?slow";

type GreetingControllerProps = RouteComponentProps<{}>;

export default function GreetingController(props: GreetingControllerProps) {
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
    props.history.push("/");
  }

  function openAddView() {
    props.history.push("/add");
  }

  return (
    <div>
      <Route
        exact
        path="/"
        render={() =>
          isLoading ? (
            <LoadingIndicator />
          ) : (
            <GreetingMaster greetings={greetings} onAdd={openAddView} />
          )
        }
      />
      <Route path="/add" render={() => <GreetingDetail onSave={addGreeting} />} />
    </div>
  );
}
