import React from "react";

interface GreetingDetailProps {
  initialName: string;
  initialGreeting: string;
}

export default function GreetingDetail(props: GreetingDetailProps) {
  const [name, setName] = React.useState<string>(props.initialName);
  const [greeting, setGreeting] = React.useState<string>(props.initialGreeting);

  function reset() {
    setName(null);
    setGreeting(props.invalidGreeting);
  }

  return (
    <div>
      <input
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
      <button>Save</button>
    </div>
  );
}
