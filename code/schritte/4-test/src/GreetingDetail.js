import React from "react";
import useInput from "./useInput";

export default function GreetingDetail(props) {
  const [nameInput, resetName] = useInput("Name", props.initialName);
  const [greetingInput, resetGreeting] = useInput("Greeting", props.initialGreeting);

  const inputRef = React.useRef();

  const saveDisabled = !(nameInput.value && greetingInput.value);

  function reset() {
    resetName();
    resetGreeting();

    if (inputRef.current) {
      inputRef.current.focus();
    }
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
