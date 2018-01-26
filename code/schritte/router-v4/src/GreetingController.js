import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import Chart from "./Chart";
import { aggregateGreetings } from "./util";

const BACKEND_URL = "http://localhost:7000/greetings";

export default class GreetingController extends React.Component {
  render() {
    const { greetings, filter } = this.state;
    const aggregatedGreetings = aggregateGreetings(greetings);
    const filtered = filter ? greetings.filter(greeting => greeting.name === filter) : greetings;

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

  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
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

  saveGreeting(greetingToBeAdded) {
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
          greetings: newGreetings
        });

        // redirect to master view
        this.redirectTo("/");

        return newGreeting;
      });
  }

  redirectTo(path) {
    const { history } = this.props;
    history.push(path);
  }
}
