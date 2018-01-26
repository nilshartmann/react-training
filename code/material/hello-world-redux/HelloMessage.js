import React from "react";
import { connect } from "react-redux";
import { resetGreeting, updateGreeting } from "./actions";

class HelloMessage extends React.Component {
  render() {
    const { updateGreeting, resetGreeting, greeting } = this.props;
    return (
      <div>
        <input onChange={event => updateGreeting(event.currentTarget.value)} value={greeting} />
        <p>{greeting}, World</p>
        <button onClick={resetGreeting}>Clear</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    greeting: state.greeting
  }),
  { updateGreeting, resetGreeting }
)(HelloMessage);
