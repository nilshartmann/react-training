import React from "react";
import GreetingMaster from "./GreetingMaster";
import GreetingEditor from "./GreetingEditor";

const BACKEND_URL = "http://localhost:7000/manygreetings";

/**
 * Performance Example
 * (Re-)renders a really large table
 *
 */
export default class GreetingController extends React.Component {
  render() {
    const { greetings, editorInput } = this.state;
    return (
      <div>
        <GreetingEditor
          id={editorInput.id}
          greeting={editorInput.greeting}
          onInputChange={(id, greeting) => {
            this.setState({ editorInput: { id, greeting } });
          }}
        />
        <button onClick={() => this.updateGreeting()}>Update Greeting</button>
        <div>Displaying {greetings.length} Greetings</div>
        <GreetingMaster greetings={greetings} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
      editorInput: {
        id: "",
        greeting: ""
      }
    };
  }

  updateGreeting() {
    const { greetings, editorInput } = this.state;

    const editorInputId = parseInt(editorInput.id);

    const newGreetings = greetings.map(greeting => {
      if (greeting.id !== editorInputId) {
        // nicht das veraenderte Greeting => wir brauchen nix zu aendern
        return greeting;
      }

      // Das veraendert Greeting. Wir kopieren es
      // und ueberschreiben dann den 'greeting'-Wert mit dem Werten aus
      // dem editorInput
      return {
        ...greeting,
        greeting: editorInput.greeting
      };
    });

    this.setState({
      greetings: newGreetings
    });
  }

  componentDidMount() {
    this.loadGreetings();
  }

  async loadGreetings() {
    let greetings = [];
    console.log("START LOADING " + BACKEND_URL);
    try {
      console.log("START LOADING " + BACKEND_URL);
      const response = await fetch(BACKEND_URL);
      console.log("RESPONSE");
      greetings = await response.json();
      console.log(`Finished loading of ${greetings.length} greetings`);
    } catch (err) {
      console.error("LOADING GREETINGS FAILED:", err);
      return;
    }

    this.setState({ greetings });
  }
}
