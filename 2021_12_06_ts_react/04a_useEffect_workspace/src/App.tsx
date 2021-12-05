import * as React from "react";

export default function App() {
  const [phrase, setPhrase] = React.useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhrase(e.target.value);
  }
  return (
    <div>
      <h1>Search...</h1>

      <input value={phrase} onChange={handleInputChange} />
    </div>
  );
}

let requestNo = 0;
/**
 * Die Funktion könnt ihr als "fetch-Ersatz" verwenden
 *
 * Ihr überbekommt einen beliebigen String und bekommt dann ein Promise zurück,
 * das nach einiger Zeit mit einem fiktiven Suchergebnis aufgelöst wird.
 *
 * Wenn der Suchstring mit "a" endet, dauert die Suche etwas länger,
 * als wenn der String mit einem anderen Buchstaben endet
 */
function executeSearchApiCall(searchString: string): Promise<string> {
  if (!searchString) {
    return Promise.resolve("");
  }
  const myRequest = requestNo++;
  return new Promise(resolve => {
    const duration = searchString.endsWith("a") ? 1000 : 500;
    setTimeout(
      () => resolve(`I found ${searchString} from Hook in request ${myRequest}`),
      duration
    );
  });
}
