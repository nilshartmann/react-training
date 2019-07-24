import React from "react";
import { useSelector } from "react-redux";
import { filterGreetings } from "./selectors";

export default function Counter() {
  // TODO ===> BETTER SELECT? WITH EITHER RE-SELECT OR USESELECTOR???
  const { greetings, filter } = useSelector(state => ({
    greetings: state.greetings,
    filter: state.filter
  }));
  const greetingCount = greetings.length;
  const filteredGreetingsCount = filterGreetings(greetings, filter).length;

  return (
    <div className="Counter">
      Showing {filteredGreetingsCount} of {greetingCount} Greetings
    </div>
  );
}
