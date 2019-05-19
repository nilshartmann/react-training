import React from "react";

export default function HelloMessage(props) {
  const [name, setName] = React.useState(props.initialGreeting || "");
  const input = React.createRef();

  function reset() {
    setName("");
    input.current.focus();
  }

  return (
    <div>
      <input ref={input} onChange={event => setName(event.target.value)} value={name} />

      <p>{name}, World</p>
      <button onClick={reset}>Clear</button>
    </div>
  );
}
