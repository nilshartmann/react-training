import * as React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import { Greeting, NewGreeting } from "./types";

const BACKEND_URL = "http://localhost:7000/greetings";
const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

type GreetingControllerProps = {};

type GreetingControllerState = {
  mode: typeof MODE_MASTER | typeof MODE_DETAIL;
  greetings: Greeting[];
};

export default class GreetingController extends React.Component<GreetingControllerProps, GreetingControllerState> {
  render() {
    const { greetings } = this.state;
    return (
      <Router>
        <div className="Main">
          <div className="Left">
            <Route exact path="/" render={() => <GreetingMaster greetings={filtered} onAdd={() => this.redirectTo("/add")} />} />
            <Route path="/add" render={() => <GreetingDetail onSave={greeting => this.saveGreeting(greeting)} />} />
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
      </Router>
    );
  }

  constructor(props: GreetingControllerProps) {
    super(props);
    this.state = {
      greetings: []
    };
  }

  componentDidMount() {
    this.loadGreetings();
  }

  async loadGreetings() {
    let greetings = null;
    try {
      const response = await fetch(BACKEND_URL);
      greetings = await response.json();
    } catch (err) {
      console.error("LOADING GREETINGS FAILED:", err);
      return;
    }

    this.setState({ greetings });
  }

  async saveGreeting(greetingToBeAdded: NewGreeting) {
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

    const newGreetings = [...this.state.greetings, newGreeting];

    // set the new list of greetings as our new state
    // also set 'MODE_MASTER' to make sure the master-View is
    // displayed now
    this.setState({
      greetings: newGreetings
    });

    // redirect to master view
    this.redirectTo("/");
  }

  redirectTo(path) {
    const { history } = this.props;
    history.push(path);
  }
}
