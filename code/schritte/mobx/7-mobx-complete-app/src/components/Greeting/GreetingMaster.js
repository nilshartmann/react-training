import React from "react";
import { inject, observer } from "mobx-react";

import { MODE_DETAIL } from "../../store";

const GreetingRow = observer(({ greeting, onRowClicked }) => (
  <tr onClick={() => onRowClicked(greeting)}>
    <td>{greeting.name}</td>
    <td>{greeting.greeting}</td>
  </tr>
));

const FilterPanel = observer(({ filter, setFilter }) => {
  if (!filter) {
    return <div className="FilterPanel">(All greetings are shown. Click a row to filter)</div>;
  }

  return (
    <div className="FilterPanel">
      (Shown are greetings for <b>{filter}</b>. <a onClick={() => setFilter(null)}>Reset Filter</a>)
    </div>
  );
});

const GreetingMaster = props => {
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
GreetingMaster.displayName = "GreetingMaster";

export default inject(({ store }) => ({
  greetings: store.filteredGreetings,
  setMode: store.setMode,
  filter: store.filter,
  setFilter: store.setFilter
}))(GreetingMaster);
