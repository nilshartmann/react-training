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

function greetingControllerReducer(state, action) {
  switch (action.type) {
    case "ADD_GREETING":
      return { ...state, mode: MODE_DETAIL };
    case "SAVE_GREETING":
      const newGreeting = action.newGreeting;
      return { greetings: [...state.greetings, newGreeting], mode: MODE_MASTER };
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

export default function GreetingController() {
  const [state, dispatch] = React.useReducer(greetingControllerReducer, {
    mode: MODE_MASTER,
    greetings: sampleGreetings
  });

  function addGreeting() {
    dispatch({ type: "ADD_GREETING" });
  }

  function saveGreeting(newGreeting) {
    newGreeting.id = currentId++;
    dispatch({
      type: "SAVE_GREETING",
      newGreeting
    });
  }

  if (state.mode === MODE_MASTER) {
    return <GreetingMaster greetings={state.greetings} onAdd={addGreeting} />;
  }

  return <GreetingDetail onSave={saveGreeting} />;
}
