import React from "react";

export default class GreetingDetail extends React.Component {
  render() {
    const { name = "", greeting } = this.state;

    return (
      <div>
        <input
          ref={input => (this.input = input)}
          onChange={event => this.updateModel(event)}
          data-component-id="name"
          value={name}
          placeholder="Name"
        />
        <input
          onChange={this.updateModel(event)}
          data-component-id="greeting"
          value={greeting}
          placeholder="Greeting"
        />

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
  }

  updateModel = (event) => {
    this.setState({ [event.target.dataset["component-id"]]: event.target.value });
  }
}
