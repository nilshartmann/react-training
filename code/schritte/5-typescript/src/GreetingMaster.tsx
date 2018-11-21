import * as React from "react";
import { Greeting } from "./types";

type GreetingMasterProps = {
  greetings: Greeting[];
  onAdd: () => void;
};

const GreetingMaster: React.FunctionComponent<GreetingMasterProps> = props => {
  const { greetings, onAdd } = props;
  const body = greetings.map(greeting => (
    <tr key={greeting.id}>
      <td>{greeting.name}</td>
      <td>{greeting.greeting}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Greeting</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default GreetingMaster;
