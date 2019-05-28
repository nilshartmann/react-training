import React from "react";

// import GreetingMaster from "./GreetingMaster";
// import GreetingDetail from "./GreetingDetail";

const GreetingMaster = React.lazy(() =>
  import(/* webpackChunkName: "GreetingMaster" */ "./GreetingMaster")
);
const GreetingDetail = React.lazy(() =>
  import(/* webpackChunkName: "GreetingDetail" */ "./GreetingDetail")
);

import { NewGreeting, Greeting } from "./types";

const BACKEND_URL = "http://localhost:7000/greetings";
const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

export default function GreetingController() {
  const [mode, setMode] = React.useState<typeof MODE_MASTER | typeof MODE_DETAIL>(MODE_MASTER);
  const [greetings, setGreetings] = React.useState<Greeting[]>([]);

  React.useEffect(() => {
    async function loadGreetings() {
      let greetings = null;
      try {
        const response = await fetch(BACKEND_URL);
        greetings = await response.json();
      } catch (err) {
        console.error("LOADING GREETINGS FAILED:", err);
        return;
      }
      setGreetings(greetings);
    }

    loadGreetings();
  }, []);

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
    setMode(MODE_MASTER);
  }

  if (mode === MODE_MASTER)
    return (
      <GreetingMaster
        greetings={greetings}
        onAdd={() => {
          setMode(MODE_DETAIL);
        }}
      />
    );

  return <GreetingDetail onSave={addGreeting} />;
}
