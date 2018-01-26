import * as React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import { Greeting, NewGreeting } from "./types";

import Chart from "./Chart";
import { aggregateGreetings } from "./util";

const BACKEND_URL = "http://localhost:7000/greetings";
const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

interface GreetingControllerProps {}

interface GreetingControllerState {
  mode: typeof MODE_MASTER | typeof MODE_DETAIL;
  greetings: Greeting[];
  filter: string | null;
}

export default class GreetingController extends React.Component<GreetingControllerProps, GreetingControllerState> {
  render() {
    const { mode, greetings, filter } = this.state;
    const aggregatedGreetings = aggregateGreetings(greetings);
    const filtered = filter ? greetings.filter(greeting => greeting.name === filter) : greetings;

    return (
      <div className="Main">
        <div className="Left">
          {mode === MODE_MASTER ? (
            <GreetingMaster greetings={filtered} onAdd={() => this.setState({ mode: MODE_DETAIL })} />
          ) : (
            <GreetingDetail onSave={(greeting: Greeting) => this.saveGreeting(greeting)} />
          )}
        </div>
        <div className="Right">
          <Chart
            data={aggregatedGreetings}
            onSegmentSelected={filter => {
              if (this.state.filter === filter) {
                // reset filter when clicking again
                this.setState({ filter: null });
              } else {
                this.setState({ filter });
              }
            }}
          />
        </div>
      </div>
    );
  }

  constructor(props: GreetingControllerProps) {
    super(props);
    this.state = {
      greetings: [],
      mode: MODE_MASTER,
      filter: null
    };
  }

  componentDidMount() {
    this.loadGreetings();
  }

  loadGreetings() {
    return fetch(BACKEND_URL)
      .then(response => response.json())
      .then(json => this.setState({ greetings: json }))
      .catch(err => console.error("LOADING GREETINGS FAILED:", err));
  }

  saveGreeting(greetingToBeAdded: NewGreeting) {
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(greetingToBeAdded)
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error("Invalid status code: " + response.status);
      })
      .then(json => {
        // the server responded with the id of the new Greeting
        const newGreetingId = json.id;
        // create a new Greeting object that contains the received id
        // (create a new object for immutability)
        const newGreeting = { ...greetingToBeAdded, id: newGreetingId };
        // add the new greetings to the list of all greetings
        // (create a new array for immutability)
        const newGreetings = [...this.state.greetings, newGreeting];

        // set the new list of greetings as our new state
        // also set 'MODE_MASTER' to make sure the master-View is
        // displayed now
        this.setState({
          greetings: newGreetings,
          mode: MODE_MASTER
        });

        return newGreeting;
      });
  }
}
