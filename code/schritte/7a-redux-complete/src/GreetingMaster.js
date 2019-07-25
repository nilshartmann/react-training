import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "./actions";
import { filterGreetings } from "./selectors";

function GreetingRow({ greeting, onRowClicked }) {
  return (
    <tr onClick={() => onRowClicked(greeting)}>
      <td>{greeting.name}</td>
      <td>{greeting.greeting}</td>
    </tr>
  );
}

function FilterPanel({ filter, setFilter }) {
  if (!filter) {
    return <div className="FilterPanel">(All greetings are shown. Click a row to filter)</div>;
  }

  return (
    <div className="FilterPanel">
      (Shown are greetings for <b>{filter}</b>. <a onClick={() => setFilter(null)}>Reset Filter</a>)
    </div>
  );
}

export default function GreetingMaster({ onAddClick }) {
  const dispatch = useDispatch();
  const { greetings, filter } = useSelector(state => ({
    greetings: state.greetings.greetings,
    filter: state.filter
  }));

  // TODO: BETTER SELECTOR
  const filteredGreetings = filterGreetings(greetings, filter);

  function setFilter(filter) {
    dispatch(actions.setFilter(filter));
  }

  const body = filteredGreetings.map(greeting => (
    <GreetingRow
      key={greeting.id}
      greeting={greeting}
      onRowClicked={greeting => setFilter(greeting.name)}
    />
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
      <button onClick={onAddClick}>Add</button>
    </div>
  );
}
