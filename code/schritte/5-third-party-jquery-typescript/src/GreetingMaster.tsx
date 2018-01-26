import * as React from "react";
import Spinner from "./Spinner";
import { Greetings } from "./types";

interface GreetingTableProps {
  greetings: Greetings;
}

const GreetingTable = ({ greetings }: GreetingTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Greeting</th>
        </tr>
      </thead>
      <tbody>
        {greetings.map(greeting => (
          <tr key={greeting.id}>
            <td>{greeting.name}</td>
            <td>{greeting.greeting}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface GreetingMasterProps {
  greetings: Greetings;

  onAdd: () => void;
}

interface GreetingMasterState {
  limitValue: string | number;
}

export default class GreetingMaster extends React.Component<GreetingMasterProps, GreetingMasterState> {
  constructor(props: GreetingMasterProps) {
    super(props);
    this.state = {
      limitValue: ""
    };
  }

  onLimitChange(newValue: string | number) {
    if (newValue === null || newValue === 0) {
      newValue = "";
    } else if (newValue < 1) {
      newValue = this.props.greetings.length - 1;
    }

    this.setState({ limitValue: newValue });
  }

  render() {
    const { greetings, onAdd } = this.props;
    const { limitValue } = this.state;

    const limitedGreetings = typeof limitValue === "number" && limitValue > 0 ? greetings.slice(0, limitValue) : greetings;

    return (
      <div>
        <Spinner
          label="Number of Greetings to show"
          value={limitValue}
          onValueChange={newValue => this.onLimitChange(newValue)}
        />

        <GreetingTable greetings={limitedGreetings} />
        <button onClick={onAdd}>Add</button>
      </div>
    );
  }
}
