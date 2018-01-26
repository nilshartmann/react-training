import * as React from "react";
import { SyntheticEvent } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import { State } from "../../../store";

import HelloMessageOutput from "./HelloMessageOutput";
import HelloMessageButton from "./HelloMessageButton";

type Props = {
  greeting: string;
  repeat?: boolean;
  resetGreeting: typeof actions.resetGreeting;
  updateGreeting: typeof actions.updateGreeting;
};

class HelloMessage extends React.Component<Props, undefined> {
  input: HTMLInputElement;
  render() {
    // ERROR: Type 'Readonly<{ children?: ReactNode; }> & Readonly<Props>' has no property 'updateGreting' and no string index signature.
    // const { greeting, repeat, updateGreting } = this.props;
    const { greeting, repeat, updateGreeting } = this.props;

    return (
      <div>
        {/*Trying to extract this results in an anemic component with the API as we also need the dom ref here*/}
        {/*so extracting it does not make any sense*/}
        <input
          ref={input => (this.input = input)}
          onChange={(event: SyntheticEvent<HTMLInputElement>) => updateGreeting(event.currentTarget.value)}
          value={greeting}
        />
        <HelloMessageOutput {...this.props} />
        <HelloMessageButton text="Click me" onClicked={() => this.reset()} />
      </div>
    );
  }
  reset() {
    const { resetGreeting } = this.props;
    this.input.focus();
    resetGreeting();
  }
}

export default connect((state: State) => ({ greeting: state.greeting }), actions)(HelloMessage);
