import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: ""
    };
  }

  render() {
    return (
      <input
        ref={n => (this.node = n)}
        onChange={event => this.setState({ greeting: event.target.value })}
        value={this.state.greeting}
      />
    );
  }

  getCurrentValue() {
    return this.state.greeting;
  }

  componentDidMount() {
    this.node.focus();
  }
}

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input ref={r => (this.inputField = r)} />
        <button onClick={() => this.getValueFromInputField()}>Get value from input</button>
        {this.state.valueFromInput && <p>Value from input: {this.state.valueFromInput}</p>}
      </div>
    );
  }

  getValueFromInputField() {
    this.setState({ valueFromInput: this.inputField.getCurrentValue() });
  }
}

const mountNode = document.getElementById("mount");
ReactDOM.render(<HelloMessage greeting="Hello" />, mountNode);
