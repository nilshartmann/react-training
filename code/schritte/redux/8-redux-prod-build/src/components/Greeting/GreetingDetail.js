import React from "react";
import PropTypes from "prop-types";

import * as actions from "../../actions";
import { connect } from "react-redux";

class GreetingDetail extends React.Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired
  };

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

  constructor(props) {
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

  updateModel(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
}

export default connect(null, dispatch => ({
  onSave: greeting => dispatch(actions.saveGreeting(greeting))
}))(GreetingDetail);
