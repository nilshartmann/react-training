import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";

let currentId = 0;

const sampleGreetings = [
  {
    id: currentId++,
    name: "Olli",
    greeting: "Huhu"
  },
  {
    id: currentId++,
    name: "Oma",
    greeting: "Hallo"
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

  return (
    <div>
      {mode === MODE_MASTER ? (
        <GreetingMaster
          greetings={greetings}
          onAdd={() => {
            setMode(MODE_DETAIL);
          }}
        />
      ) : (
        <GreetingDetail onSave={addGreeting} />
      )}
    </div>
  );
}
