import React from "react";
import Search from "./Search";

export default function App() {
  const [username, setUsername] = React.useState("Klaus");
  const [phrase, setPhrase] = React.useState("Neuer Trainer FC Bayern");
  const [format, setFormat] = React.useState(false);

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhrase(e.target.value);
  }

  function toUpperCaseResultFormatter(s: string) {
    return s.toUpperCase();
  }

  return (
    <div>
      <h1>Search...</h1>
      <label>
        Your name
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>Search for</label>
      <input type="text" value={phrase} onChange={handleInputChange} />
      <label>
        <input type="checkbox" checked={format} onChange={e => setFormat(e.target.checked)} />
        Format Search Result
      </label>

      <Search searchString={phrase} resultFormatter={format ? toUpperCaseResultFormatter : null} />
    </div>
  );
}
