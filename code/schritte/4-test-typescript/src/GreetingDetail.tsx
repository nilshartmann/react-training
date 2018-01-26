import * as React from "react";
import { Greeting, NewGreeting } from "./types";

interface GreetingDetailProps  {
  greeting?: Greeting;
  onSave: (newGreeting: NewGreeting) => void;
};

interface GreetingDetailState {
  name: string;
  greeting: string;
};

export default class GreetingDetail extends React.Component<GreetingDetailProps, GreetingDetailState> {
  input?: HTMLInputElement | null;

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

  constructor(props: GreetingDetailProps) {
    super(props);
    const { name, greeting } = this.props.greeting || { name: "", greeting: "" };
    this.state = {
      name,
      greeting
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
    this.setState({ [event.currentTarget.name as any]: event.currentTarget.value });
  }
}
