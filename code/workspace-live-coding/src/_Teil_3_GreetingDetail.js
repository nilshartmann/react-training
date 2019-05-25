import React from "react";

import { sampleGreetings } from "./_sample-greetings";

// ---------------------------------------------------------------------------------------------------
export function GreetingDetail(props) {
  const [name, setName] = React.useState(props.initialName || "");
  const [greeting, setGreeting] = React.useState(props.initialGreeting || "");
  const inputRef = React.useRef();

  function reset() {
    setName("");
    setGreeting("");

    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        onChange={event => setName(event.target.value)}
        value={name}
        placeholder="Name"
      />
      <input
        onChange={event => setGreeting(event.target.value)}
        value={greeting}
        name="greeting"
        placeholder="Greeting"
      />

      <button onClick={reset}>Clear</button>
    </div>
  );
}

// ---------------------------------------------------------------------------------------------------
export function GreetingMaster(props) {
  const body = props.greetings.map(greeting => (
    <tr key={greeting.id}>
      <td>{greeting.name}</td>
      <td>{greeting.greeting}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Greeting</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
      <button>Add</button>
    </div>
  );
}
