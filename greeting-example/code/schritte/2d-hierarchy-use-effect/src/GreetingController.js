import React from "react";
function GreetingDisplay(props) {
  console.log("GreetingDisplay - start", props);

  React.useEffect(() => {
    console.log("GreetingDisplay - useEffect", props);
    return () => console.log("GreetingDisplay - clean up");
  });

  return <div>Aktueller Gruß: {props.greeting}</div>;
}

export default function GreetingController() {
  console.log("GreetingController - start");

  const [name, setName] = React.useState("");
  const [greeting, setGreeting] = React.useState("");

  React.useEffect(() => {
    console.log("GreetingController - useEffect depending on name");
    return () => console.log("GreetingController - clean up");
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Please enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Please enter greeting"
        value={greeting}
        onChange={e => setGreeting(e.target.value)}
      />

      <GreetingDisplay greeting={greeting} />
    </div>
  );
}
