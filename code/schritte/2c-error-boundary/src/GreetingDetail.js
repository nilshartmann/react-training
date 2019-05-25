import React from "react";

export default function GreetingDetail(props) {
  const [name, setName] = React.useState(props.initialName || "");
  const [greeting, setGreeting] = React.useState(props.initialGreeting || "");

  const input = React.useRef();

  const saveDisabled = !(name && greeting);

  function reset() {
    setName("");
    setGreeting("");

    input.current.focus();
  }

  function save() {
    props.onSave({
      name,
      greeting
    });
  }

  if (name === "hsv") {
    // ouch #1
    let someUnintializedValue = null;
    setName(someUnintializedValue.toUpperCase()); // ouch #2
  }

  return (
    <div>
      <input
        ref={input}
        onChange={event => setName(event.target.value)}
        value={name}
        placeholder="Name"
      />
      <input
        onChange={event => setGreeting(event.target.value)}
        value={greeting}
        placeholder="Greeting"
      />

      <button onClick={reset}>Clear</button>
      <button disabled={saveDisabled} onClick={save}>
        Save
      </button>
    </div>
  );
}
