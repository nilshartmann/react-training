import React from "react";
import { NewGreeting } from "./types";

type GreetingDetailProps = {
  initialName?: string;
  initialGreeting?: string;

  onSave(newGreeting: NewGreeting): void;
};

export default function GreetingDetail(props: GreetingDetailProps) {
  const [name, setName] = React.useState(props.initialName || "");
  const [greeting, setGreeting] = React.useState(props.initialGreeting || "");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const saveDisabled = !(name && greeting);

  function reset() {
    setName("");
    setGreeting("");

    if (inputRef.current) {
      // make sure, 'current' is actually set
      // (it will NOT be set in tests without DOM!)
      inputRef.current.focus();
    }
  }

  function save() {
    props.onSave({
      name,
      greeting
    });
  }

  return (
    <div>
      <input
        ref={inputRef}
        onChange={event => setName(event.currentTarget.value)}
        value={name}
        name="name"
        placeholder="Name"
      />
      <input
        onChange={event => setGreeting(event.currentTarget.value)}
        value={greeting}
        name="greeting"
        placeholder="Greeting"
      />

      <button onClick={reset}>Clear</button>
      <button disabled={saveDisabled} onClick={save}>
        Save
      </button>
    </div>
  );
}
