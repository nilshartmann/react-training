import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";

const BACKEND_URL = "http://localhost:7000/greetings";
const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

export default class GreetingController extends React.Component {
  render() {
    const { mode, greetings } = this.state;
    return (
      <div>
        {mode === MODE_MASTER ? (
          <GreetingMaster greetings={greetings} onAdd={() => this.setState({ mode: MODE_DETAIL })} />
        ) : (
          <GreetingDetail onSave={greeting => this.saveGreeting(greeting)} />
        )}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
      mode: MODE_MASTER
    };
  }

  componentDidMount() {
    this.loadGreetings();
  }

  async loadGreetings() {
    let greetings;

    try {
      // TODO:
      // 1. Mit fetch Serverzugriff machen
      // 2. Aus der Antwort das JSON-Objekt auslesen (zuweisen an 'greetings')
      //   (Die gelesene Antwort entspricht unserem Greetings-Array)
    } catch (err) {
      console.error("LOADING GREETINGS FAILED:", err);
      return;
    }

    // 3. setze die gelesenen Greetings (=> Antwort vom Server)
    // als State neu
  }

  async saveGreeting(greetingToBeAdded) {
    let newGreeting;

    try {
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

      // (1b Optional: wirf einen Error wenn der Resonse Status nicht 201 ist)

      // 2. Lies aus der Antwort das JSON Objekt aus (zuweisen an 'newGreeting')
      //    (Die Antwort entspricht dem neuen Greeting + einer Id, die auf dem
      //     Server erzeugt wurde)
    } catch (err) {
      console.error("LOADING GREETINGS FAILED:", err);
    }

    // 3. Erzeuge eine neue Liste mit Greetings
    //    (bestehende Liste aus dem State ('greetings') und das eben
    //    gelesene Greeting ('newGreeting'))

    // 4. Setze den Zustand neu:
    //    - 'greetings' mit den neuen Greetings
    //    - 'mode' auf MODE_MASTER, um den Master-View wieder anzuzeigen
  }
}
