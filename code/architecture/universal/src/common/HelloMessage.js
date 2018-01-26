import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "./actions";

class HelloMessage extends React.Component {
  render() {
    const { greeting, updateGreeting, resetGreeting } = this.props;

    return (
      <div>
        <input onChange={event => updateGreeting(event.target.value)} value={greeting} />
        <p>{greeting}, World</p>
        <button onClick={() => resetGreeting()}>Clear</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    greeting: state.greeting
  }),
  dispatch => bindActionCreators(Actions, dispatch)
)(HelloMessage);
