import React from "react";
import { withState } from "./stateHoc";

// https://facebook.github.io/react/docs/react-api.html#react.purecomponent
// might cause performance boost
// might be functional component instead
class HelloMessage extends React.PureComponent {
  render() {
    const { value, updateModel } = this.props;
    return (
      <div>
        <input ref={input => (this.input = input)} onChange={event => updateModel(event.currentTarget.value)} value={value} />
        <p>{value}, World</p>
        <button onClick={() => this.reset()}>Clear</button>
      </div>
    );
  }
  reset() {
    const { updateModel } = this.props;
    updateModel("");
    this.input.focus();
  }
}

// https://facebook.github.io/react/docs/higher-order-components.html
export default withState(HelloMessage, {
  initialDataProp: "greeting"
});
