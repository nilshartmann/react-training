import React from "react";

export default class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <input ref="in" onChange={event => this.updateModel(event)} value={this.state.greeting} />
        <p>{this.state.greeting}, World</p>
        <button onClick={() => this.reset()}>Clear</button>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { greeting: this.props.greeting };
  }
  reset() {
    this.setState({ greeting: "" });
    this.refs.in.focus();
  }
  updateModel(event) {
    this.setState({ greeting: event.target.value });
  }
}
