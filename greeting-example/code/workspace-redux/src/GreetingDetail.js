import React from "react";

/**
 * Aufgaben:
 * 1. Placeholder vorbelegen, davon das 'name' Attribute ableiten
 * 2. initial Value vorbelegen mit "", falls nicht gesetzt
 * 3. Setzen des Wertes und auf Veränderungen reagieren
 * 4. Von außen 'reset-bar' sein
 *
 */
function useInput(placeholder, initialValue) {
  const [value, setValue] = React.useState(initialValue || "");

  function reset() {
    setValue("");
  }

  return [
    {
      placeholder,
      name: placeholder.toLowerCase(),
      onChange: event => setValue(event.target.value),
      value
    },
    reset
  ];
}

export default function GreetingDetail(props) {
  const [nameInput, resetName] = useInput("Name", props.initialName);
  const [greetingInput, resetGreeting] = useInput("Greeting", props.initialGreeting);

  const inputRef = React.useRef();

  const saveDisabled = !(nameInput.value && greetingInput.value);

  function reset() {
    resetName();
    resetGreeting();

    inputRef.current.focus();
  }

  function save() {
    props.onSave({
      name: nameInput.value,
      greeting: greetingInput.value
    });
  }

  return (
    <div>
      <input {...nameInput} ref={inputRef} />
      <input {...greetingInput} />

      <button onClick={reset}>Clear</button>
      <button disabled={saveDisabled} onClick={save}>
        Save
      </button>
    </div>
  );
}
