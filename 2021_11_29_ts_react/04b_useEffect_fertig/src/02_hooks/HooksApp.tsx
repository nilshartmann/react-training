import React from "react";
import Search from "./Search";

export default function App() {
  const [phrase, setPhrase] = React.useState("XXX");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhrase(e.target.value);
  }

  return (
    <div>
      <h1>Search...</h1>

      <p>(Use "a" for slow, and "b" for fast results)</p>

      <input value={phrase} onChange={handleInputChange} />
      <Search searchString={phrase} />
    </div>
  );
}
