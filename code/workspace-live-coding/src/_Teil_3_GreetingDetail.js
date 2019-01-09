import React from "react";

import { sampleGreetings } from "./_sample-greetings";

// ---------------------------------------------------------------------------------------------------
export default class GreetingDetail extends React.Component {
  render() {
    const { name = "", greeting } = this.state;

    return (
      <div>
        <input
          ref={input => (this.input = input)}
          onChange={event => this.updateModel(event)}
          name="name"
          value={name}
          placeholder="Name"
        />
        <input onChange={event => this.updateModel(event)} value={greeting} name="greeting" placeholder="Greeting" />

        <button onClick={this.reset}>Clear</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    const { name = "Klaus", greeting = "Moin" } = this.props;
    this.state = {
      name,
      greeting
    };
  }

  reset = () => {
    this.setState({ name: "", greeting: "" });
    if (this.input) {
      this.input.focus();
    }
  };

  updateModel = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

// ---------------------------------------------------------------------------------------------------
function GreetingMaster(props) {
  const body = props.greetings.map(greeting => (
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
      <button>Add</button>
    </div>
  );
}
