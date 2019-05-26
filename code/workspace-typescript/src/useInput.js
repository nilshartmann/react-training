import React from "react";

// type InputProps = {
//   value: string;
//   placeholder: string;
//   onChange(event: React.SyntheticEvent<HTMLInputElement>): void;
//   name: string;
// };

// TODO:
// Definiere den Rückgabe-Typ für useInput
// Der Typ soll ein Array abbilden, dass aus zwei Einträgen
// besteht:
// 1. Die Parameter für das Eingabe Feld (placeholder, value, name, onChange)
//    Dieser Typ ist oben schon definiert (einfach auskommentieren)
// 2. Eine Funktion, die keine Parameter hat und keinen Rückgabewert (void)
// type UseInputResult = ...;

// TODO:
// 1. Gib die Parameter für 'placeholder' und 'initialValue' an
// 2. Gib den Rückgabewert für useInput an
export default function useInput(placeholder, initialValue) {
  const [value, setValue] = React.useState(initialValue || "");

  function reset() {
    setValue("");
  }

  return [
    {
      placeholder,
      name: placeholder.toLowerCase(),
      onChange: event => setValue(event.currentTarget.value),
      value
    },
    reset
  ];
}
