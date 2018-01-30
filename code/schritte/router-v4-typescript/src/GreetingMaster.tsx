import * as React from "react";
import { Link } from "react-router-dom";
import { Greeting } from "./types";

type GreetingMasterProps = {
  greetings: Greeting[];
  onAdd: () => void;
};

const GreetingMaster = (props: GreetingMasterProps) => {
  const { greetings, onAdd } = props;
  const body = greetings.map(greeting => (
    <tr key={greeting.id}>
      <td>{greeting.name}</td>
      <td>{greeting.greeting}</td>
      <td>
        <Link to={`/greet/${greeting.id}`}>Link</Link>
      </td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Greeting</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default GreetingMaster;
