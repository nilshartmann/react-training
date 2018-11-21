import React from "react";
import { connect } from "react-redux";

class HelloMessage extends React.Component {
  state = {
    greeting: ""
  };

  updateGreeting(newGreeting) {
    this.setState({ greeting: newGreeting });
  }

  resetGreeting() {
    this.setState({ greeting: "" });
  }

  render() {
    const { greeting } = this.state;
    return (
      <div>
        <input onChange={event => this.updateGreeting(event.currentTarget.value)} value={greeting} />
        <p>{greeting}, World</p>
        <button onClick={() => this.resetGreeting}>Clear</button>
      </div>
    );
  }
}

// TODO: Verbinde die Komponente mit Redux
//  - lese 'greeting' aus dem Store
//  - uebergebe die beiden Action Creator updateGreeting und resetGreeting

export default HelloMessage;
