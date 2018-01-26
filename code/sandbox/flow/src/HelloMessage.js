// @flow

import React from "react";
import { connect } from "react-redux";

import * as actions from "./actions";

import type { State } from "./store";

type Props = State & {
  // greeting: string;
  repeat?: boolean,
  resetGreeting: typeof actions.resetGreeting,
  updateGreeting: typeof actions.updateGreeting
};

class HelloMessage extends React.Component<void, Props, void> {
  input: HTMLInputElement;
  render() {
    // const { greeting, repeat, updateGreting } = this.props;
    const { greeting, repeat, updateGreeting } = this.props;

    const output = <p>{greeting}, World</p>;

    // https://flow.org/en/docs/frameworks/react/#toc-adding-types-for-react-events
    return (
      <div>
        <input
          ref={input => (this.input = input)}
          onChange={(event: SyntheticEvent & { currentTarget: HTMLInputElement }) => updateGreeting(event.currentTarget.value)}
          value={greeting}
        />
        {output}
        {repeat && output}
        <button onClick={() => this.reset()}>Clear</button>
      </div>
    );
  }
  reset() {
    const { resetGreeting } = this.props;
    this.input.focus();
    resetGreeting();
  }
}

export default connect(state => ({ greeting: state.greeting }), actions)(HelloMessage);
