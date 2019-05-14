import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import Status from "./Status";

let currentId = 0;

const sampleGreetings = [
  {
    id: currentId++,
    name: "Olli",
    greeting: "Huhu"
  },
  {
    id: currentId++,
    name: "Oma",
    greeting: "Hallo"
  }
];

const MODE_MASTER = "MODE_MASTER";
const MODE_DETAIL = "MODE_DETAIL";

export default class GreetingController extends React.Component {
  render() {
    const { mode, greetings } = this.state;
    return (
      <div>
        {mode === MODE_MASTER ? (
          <GreetingMaster
            greetings={greetings}
            onAdd={() => {
              this.setState({ mode: MODE_DETAIL });
            }}
            onDelete={greetingIds => {
              this.setState({
                greetings: greetings.filter(greeting => !greetingIds.includes(greeting.id))
              });
            }}
          />
        ) : (
          <GreetingDetail onSave={this.addGreeting} />
        )}

        <Status greetings={greetings} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    console.log("GreetingController - constructor");
    this.state = {
      greetings: sampleGreetings,
      mode: MODE_MASTER
    };
  }

  addGreeting = greetingToBeAdded => {
    const { greetings } = this.state;
    greetingToBeAdded.id = currentId++;

    // const newArray = this.state.greetings.concat(greetingToBeAdded);

    const newGreetings = [...greetings, greetingToBeAdded];
    this.setState({
      greetings: newGreetings,
      mode: MODE_MASTER
    });
  };
}
