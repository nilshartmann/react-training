import * as React from "react";
import * as PropTypes from "prop-types";

import { NewGreeting } from "../../types";

import * as actions from "../../actions";
import { connect } from "react-redux";

type DispatchProps = {
  onSave: (newGreeting: NewGreeting) => void;
};

type State = {
  name: string;
  greeting: string;
};

class GreetingDetail extends React.Component<DispatchProps, State> {
  input: HTMLInputElement | null;

  render() {
    const { name, greeting } = this.state;
    const saveDisabled = !(name && greeting);

    return (
      <div>
        <input
          ref={input => (this.input = input)}
          onChange={event => this.updateModel(event)}
          name="name"
          value={name}
          placeholder="Name"
        />
        <input onChange={event => this.updateModel(event)} name="greeting" value={greeting} placeholder="Greeting" />
        <button onClick={() => this.reset()}>Clear</button>
        <button disabled={saveDisabled} onClick={() => this.save()}>
          Save
        </button>
      </div>
    );
  }

  constructor(props: DispatchProps) {
    super(props);

    this.state = {
      name: "",
      greeting: ""
    };
  }

  reset() {
    this.setState({ name: "", greeting: "" });
    if (this.input) {
      this.input.focus();
    }
  }

  save() {
    const { onSave } = this.props;
    const { name, greeting } = this.state;
    onSave({
      name,
      greeting
    });
  }

  updateModel(event: React.SyntheticEvent<HTMLInputElement>) {
    // DOES NOT WORK WITH TS:
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    // see ==>
    // https://github.com/Microsoft/TypeScript/issues/13948
    // https://github.com/Microsoft/TypeScript/issues/15534

    this.setState({ ...this.state, [event.currentTarget.name]: event.currentTarget.value });
  }
}

export default connect<{}, DispatchProps, {}>(null, dispatch => ({
  onSave: (greeting: NewGreeting) => console.log(dispatch) || dispatch(actions.saveGreeting(greeting))
}))(GreetingDetail);
