import * as React from "react";
import { connect } from "react-redux";

import { Greeting, Greetings, GreetingFilter, Mode, MODE_DETAIL } from "../../types";
import { filterGreetings } from "../../selectors";

import { setFilter, setMode } from "../../actions";

const GreetingRow = ({ greeting, onRowClicked }: { greeting: Greeting; onRowClicked: (greeting: Greeting) => void }) => (
  <tr onClick={() => onRowClicked(greeting)}>
    <td>{greeting.name}</td>
    <td>{greeting.greeting}</td>
  </tr>
);

const FilterPanel = ({ filter, setFilter }: { filter: GreetingFilter; setFilter: (filter: GreetingFilter) => void }) => {
  if (!filter) {
    return <div className="FilterPanel">(All greetings are shown. Click a row to filter)</div>;
  }

  return (
    <div className="FilterPanel">
      (Shown are greetings for <b>{filter}</b>. <a onClick={() => setFilter(null)}>Reset Filter</a>)
    </div>
  );
};

type StateProps = {
  greetings: Greetings;
  filter: GreetingFilter;
};

type DispatchProps = {
  setMode: typeof setMode;
  setFilter: typeof setFilter;
};

const GreetingMaster = (props: StateProps & DispatchProps) => {
  const { greetings, setMode, filter, setFilter } = props;
  const body = greetings.map(greeting => (
    <GreetingRow key={greeting.id} greeting={greeting} onRowClicked={greeting => setFilter(greeting.name)} />
  ));
  return (
    <div>
      <table className="SelectableTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Greeting</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
      <FilterPanel filter={filter} setFilter={setFilter} />
      <button onClick={() => setMode(MODE_DETAIL)}>Add</button>
    </div>
  );
};
// GreetingMaster.displayName = 'GreetingMaster';

export default connect<StateProps, DispatchProps, {}>(
  state => ({
    greetings: filterGreetings(state.greetings, state.filter),
    filter: state.filter
  }),
  { setMode, setFilter }
)(GreetingMaster);
