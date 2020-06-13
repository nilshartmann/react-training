import React from "react";
import { Button } from "./components";

export default function GreetingDetail(props) {
  const [name, setName] = React.useState(props.initialName || "");
  const [greeting, setGreeting] = React.useState(props.initialGreeting || "");
  const inputRef = React.useRef();
  const saveDisabled = !(name && greeting);

  function reset() {
    setName("");
    setGreeting("");

    inputRef.current.focus();
  }

  function save() {
    props.onSave({
      name,
      greeting
    });
  }

  if (name === " ") {
    throw new Error("Ups...");
  }

  function updateName(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input ref={inputRef} onChange={updateName} value={name} name="name" placeholder="Name" />
      <input
        onChange={event => setGreeting(event.target.value)}
        value={greeting}
        name="greeting"
        placeholder="Greeting"
      />

      <Button onClick={reset}>Clear</Button>
      <Button action disabled={saveDisabled} onClick={save}>
        Save
      </Button>
    </div>
  );
}
