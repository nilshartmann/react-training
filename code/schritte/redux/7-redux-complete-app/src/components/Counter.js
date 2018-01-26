import React from "react";
import { connect } from "react-redux";

import { filterGreetings } from "../selectors";

const Counter = ({ greetingCount, filteredGreetingsCount }) => (
  <div className="Counter">
    Showing {filteredGreetingsCount} of {greetingCount} Greetings
  </div>
);
Counter.displayName = "Counter";

export default connect(state => ({
  greetingCount: state.greetings.length,
  filteredGreetingsCount: filterGreetings(state.greetings, state.filter).length
}))(Counter);
