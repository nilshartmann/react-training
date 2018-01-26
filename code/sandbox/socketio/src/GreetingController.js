import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import Chart from "./Chart";
import { subscribeToGreetings, unsubscribeFromGreetings, saveGreeting } from "./backend";
import { aggregateGreetings } from "./util";

const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

export default class GreetingController extends React.Component {
  render() {
    const { mode, greetings, filter, showChart } = this.state;
    const aggregatedGreetings = aggregateGreetings(greetings);
    const filtered = filter ? greetings.filter(greeting => greeting.name === filter) : greetings;

    return (
      <div className="Main">
        <div className="Left">
          {mode === MODE_MASTER ? (
            <GreetingMaster greetings={filtered} onAdd={() => this.setState({ mode: MODE_DETAIL })} />
          ) : (
            <GreetingDetail onSave={greeting => this.saveGreeting(greeting)} />
          )}
        </div>
        <div className="Right">
          {this.state.showChart && (
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
          )}
          <button onClick={() => this.setState({ showChart: !this.state.showChart })}>Toggle Display</button>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
      mode: MODE_MASTER,
      filter: null,
      showChart: true
    };
  }

  componentDidMount() {
    subscribeToGreetings(greetings => this.setState({ greetings }));
  }

  componentWillUnmount() {
    unsubscribeFromGreetings();
  }

  saveGreeting(greetingToBeAdded) {
    saveGreeting(greetingToBeAdded).then(_ => {
      // set MASTER view again; the list of greetings
      // is updated as soon as the new list of greetings
      // is pushed from the server via socket.io
      this.setState({
        mode: MODE_MASTER
      });
    });
  }
}
