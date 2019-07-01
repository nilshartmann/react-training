import React from "react";

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

  if (name === "hsv") {
    setNam(""); // ouch, typo!
  }

  return (
    <div>
      <input
        ref={inputRef}
        onChange={event => setName(event.target.value)}
        value={name}
        name="name"
        placeholder="Name"
      />
      <input
        onChange={event => setGreeting(event.target.value)}
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
