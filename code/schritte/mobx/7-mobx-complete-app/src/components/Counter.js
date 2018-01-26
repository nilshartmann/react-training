import React from "react";
import { inject } from "mobx-react";

const Counter = ({ greetingCount, filteredGreetingsCount }) => (
  <div className="Counter">
    Showing {filteredGreetingsCount} of {greetingCount} Greetings
  </div>
);
Counter.displayName = "Counter";

export default inject(({ store }) => ({
  greetingCount: store.greetings.length,
  filteredGreetingsCount: store.filteredGreetings.length
}))(Counter);
