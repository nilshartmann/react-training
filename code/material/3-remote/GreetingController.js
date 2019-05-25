import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";

const BACKEND_URL = "http://localhost:7000/greetings";
const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

export default function GreetingController() {
  const [mode, setMode] = React.useState(MODE_MASTER);
  const [greetings, setGreetings] = React.useState([]);

  React.useEffect(() => {
    async function loadGreetings() {
      // TODO:
      // 1. Mit fetch Serverzugriff machen
      // 2. Aus der Antwort das JSON-Objekt auslesen
      //   (Die gelesene Antwort entspricht unserem Greetings-Array)
      // 3. Setzen der Greetings (Antwort vom Server) in den State
    }

    loadGreetings();
  }, []);

  async function addGreeting(greetingToBeAdded) {
    // TODO:
    // 1. Vervollständige den fetch-Aufruf
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(greetingToBeAdded)
    });

    // 2. Lies aus der Antwort das JSON Objekt aus (zuweisen an 'newGreeting')
    //    (Die Antwort entspricht dem neuen Greeting + einer Id, die auf dem
    //     Server erzeugt wurde)

    // 3. Erzeuge eine neue Liste mit Greetings
    //    (bestehende Liste aus dem State ('greetings') und das eben
    //    gelesene Greeting ('newGreeting'))

    // 4. Setze den Zustand neu:
    //    - 'greetings' mit den neuen Greetings
    //    - 'mode' auf MODE_MASTER, um den Master-View wieder anzuzeigen
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
