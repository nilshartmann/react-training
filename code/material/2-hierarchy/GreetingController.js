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
      1a. Hier statt null deine GreetingDetail-Komponente zurück geben
      1b. Eine Callback-Funktion für das Hinzufügen eines Grußes an die GreetingDetail-Komponente übergeben
      1c. Die Callback-Funktion soll addGreeting (s.o.) aufrufen, um den Gruß der Liste hinzuzufügen

      2a. In GreetingDetail einen Knopf zum Hinzufügen einbauen
      2b. Beim Drücken auf den Knopf soll die übergebene Callback-Funktion (1b) mit dem eingegebenen
          Gruß aufgerufen werden (Parameter: ein Objekt { name: ..., greeting: ... })
    */

  return null;
}
