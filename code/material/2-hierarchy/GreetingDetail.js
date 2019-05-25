import React from "react";

export default function GreetingDetail(props) {
  const [name, setName] = React.useState(props.initialName || "");
  const [greeting, setGreeting] = React.useState(props.initialGreeting || "");

  const input = React.useRef();

  function reset() {
    setName("");
    setGreeting("");

    input.current.focus();
  }

  function save() {
    /*
        Hier die übergebene Callback-Funktion 'onSave' (aus den Properties) aufrufen,
        und ein Objekt, bestehend aus name und greeting (jeweils aus dem State)
        übergeben
         */
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
      {/*
         Hier neuen Button hinzufügen, der die save()-Funktion (s. o.) 
         beim onClick()-Event aufruft
      */}
    </div>
  );
}
