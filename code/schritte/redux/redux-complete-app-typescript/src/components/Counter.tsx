import * as React from "react";
import { connect } from "react-redux";

import { filterGreetings } from "../selectors";
import { AppState } from "../types";
type StateProps = {
  greetingCount: number;
  filteredGreetingsCount: number;
};

const Counter = ({ greetingCount, filteredGreetingsCount }: StateProps) => (
  <div className="Counter">
    Showing {filteredGreetingsCount} of {greetingCount} Greetings
  </div>
);
// Counter.displayName = 'Counter';

export default connect<StateProps, {}, {}>((state: AppState) => ({
  greetingCount: state.greetings.length,
  filteredGreetingsCount: filterGreetings(state.greetings, state.filter).length
}))(Counter);
