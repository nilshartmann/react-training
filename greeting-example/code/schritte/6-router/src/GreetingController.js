import React from "react";

import { Route } from "react-router-dom";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import LoadingIndicator from "./LoadingIndicator";
import useApi from "./useApi";

const BACKEND_URL = "http://localhost:7000/greetings";

export default function GreetingController(props) {
  const [greetings, setGreetings, isLoading] = useApi(BACKEND_URL, []);

  async function addGreeting(greetingToBeAdded) {
    let newGreeting;
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
