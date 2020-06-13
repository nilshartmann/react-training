import React from "react";

import GreetingMaster from "./GreetingMaster";

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
    // neue id für das Greeting generieren (später auf dem Server)
    greetingToBeAdded.id = currentId++;

    // neue Liste mit Grüßen erzeugen und setzen
    const newGreetings = [...greetings, greetingToBeAdded];
    setGreetings(newGreetings);

    // wieder den Master anzeigen
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

  /*
      TODO:

      1. Hier statt null deine GreetingDetail-Komponente zurück geben
          - Der Komponente eine Callback-Funktion für das Hinzufügen eines Grußes übergeben
          - Die Callback-Funktion soll die fertige addGreeting-Funktion (oben) aufrufen, 
            um den Gruß der Liste hinzufügen

      2. In GreetingDetail einen Knopf zum Hinzufügen einbauen (siehe dort)
      
    */

  return null;
}
