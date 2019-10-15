import React from "react";

export default function GreetingDetail(props) {
  const [name, setName] = React.useState(props.initialGreeting || "");

  function reset() {
    setName("");
  }

  return (
    <div>
      <input onChange={event => setName(event.target.value)} value={name} />

      <p>{name}, World</p>
      <button onClick={reset}>Clear</button>
    </div>
  );
}
