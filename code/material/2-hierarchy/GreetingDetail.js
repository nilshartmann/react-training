import React from "react";

export default class GreetingDetail extends React.Component {
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
        {/*

                    Hier neuen Button hinzufügen, der this.save beim onClick()-Event aufruft
                    this.save siehe unten

                */}
      </div>
    );
  }

  constructor(props) {
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
    /*
        Hier die übergebene Callback-Funktion 'onSave' (aus den Properties) aufrufen,
        und ein Objekt, bestehend aus name und greeting (jeweils aus dem State)
        übergeben
         */
  }

  updateModel(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
}
