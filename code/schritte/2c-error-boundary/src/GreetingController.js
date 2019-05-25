import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";

let currentId = 0;

const sampleGreetings = [
  {
    id: currentId++,
    name: "Klaus",
    greeting: "Huhu"
  },
  {
    id: currentId++,
    name: "Susi",
    greeting: "Moin"
  }
];

const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

export default function GreetingController() {
  const [mode, setMode] = React.useState(MODE_MASTER);
  const [greetings, setGreetings] = React.useState(sampleGreetings);

  function addGreeting(greetingToBeAdded) {
    greetingToBeAdded.id = currentId++;

    const newGreetings = [...greetings, greetingToBeAdded];
    setGreetings(newGreetings);
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
