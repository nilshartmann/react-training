import React from "react";
import Spinner from "./Spinner";

const GreetingTable = ({ greetings }) => {
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

export default class GreetingMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitValue: "",
      showSpinner: true
    };
  }

  onLimitChange(newValue) {
    if (newValue === null || newValue === 0) {
      newValue = "";
    } else if (newValue < 1) {
      newValue = this.props.greetings.length - 1;
    } else if (newValue > this.props.greetings.length) {
      newValue = 1;
    }

    this.setState({ limitValue: newValue });
  }

  render() {
    const { greetings, onAdd } = this.props;
    const { limitValue, showSpinner } = this.state;

    const limitedGreetings = limitValue > 0 ? greetings.slice(0, limitValue) : greetings;

    return (
      <div>
        {this.state.showSpinner && (
          <Spinner
            label="Number of Greetings to show"
            value={limitValue}
            onValueChange={newValue => this.onLimitChange(newValue)}
          />
        )}

        <div>
          Showing {limitedGreetings.length} of {greetings.length} greetings &nbsp;<a
            onClick={() => this.setState({ showSpinner: !showSpinner })}
          >
            {showSpinner ? "Hide Spinner" : "Show Spinner"}
          </a>
        </div>
        <GreetingTable greetings={limitedGreetings} />
        <button onClick={onAdd}>Add</button>
      </div>
    );
  }
}
