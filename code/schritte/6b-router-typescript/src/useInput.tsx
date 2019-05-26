import React from "react";
/**
 * Aufgaben:
 * 1. Placeholder vorbelegen, davon das 'name' Attribute ableiten
 * 2. initial Value vorbelegen mit "", falls nicht gesetzt
 * 3. Setzen des Wertes und auf Veränderungen reagieren
 * 4. Von außen 'reset-bar' sein
 *
 */

type UseInputResult = [
  {
    value: string;
    placeholder: string;
    onChange(event: React.SyntheticEvent<HTMLInputElement>): void;
    name: string;
  },
  () => void
];

export default function useInput(placeholder: string, initialValue?: string): UseInputResult {
  const [value, setValue] = React.useState(initialValue || "");

  function reset() {
    setValue("");
  }

  return [
    {
      placeholder,
      name: placeholder.toLowerCase(),
      onChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
        setValue(event.currentTarget.value),
      value
    },
    reset
  ];
}
