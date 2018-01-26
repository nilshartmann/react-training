import React from "react";
import { connect } from "react-redux";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import Chart from "./Chart";
import * as actions from "./actions";

import { aggregateGreetings, filterGreetings } from "./selectors";
import { MODE_MASTER, MODE_DETAIL } from "./actions";

class GreetingController extends React.Component {
  render() {
    const { aggregatedGreetings, greetings, mode } = this.props;
    const { setMode, saveGreeting, setFilter } = this.props;

    return (
      <div className="Main">
        <div className="Left">
          {mode === MODE_MASTER ? (
            <GreetingMaster greetings={greetings} onAdd={() => setMode(MODE_DETAIL)} />
          ) : (
            <GreetingDetail onSave={saveGreeting} />
          )}
        </div>
        <div className="Right">
          <Chart data={aggregatedGreetings} onSegmentSelected={setFilter} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    aggregatedGreetings: aggregateGreetings(state.greetings),
    greetings: filterGreetings(state.greetings, state.filter),
    mode: state.mode
  }),
  actions
)(GreetingController);
