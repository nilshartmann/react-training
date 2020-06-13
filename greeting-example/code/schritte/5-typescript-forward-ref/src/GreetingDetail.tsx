import React from "react";
import useInput from "./useInput";
import { NewGreeting } from "./types";
import Input from "./Input";

type GreetingDetailProps = {
  initialName?: string;
  initialGreeting?: string;

  onSave(newGreeting: NewGreeting): void;
};

export default function GreetingDetail(props: GreetingDetailProps) {
  const [nameInput, resetName] = useInput("Name", props.initialName);
  const [greetingInput, resetGreeting] = useInput("Greeting", props.initialGreeting);

  const inputRef = React.useRef<HTMLInputElement>(null);

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
      <Input {...nameInput} ref={inputRef} />
      <Input {...greetingInput} />

      <button onClick={reset}>Clear</button>
      <button disabled={saveDisabled} onClick={save}>
        Save
      </button>
    </div>
  );
}
