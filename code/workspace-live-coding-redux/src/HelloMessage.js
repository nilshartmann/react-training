import React from "react";
import { useSelector, useDispatch } from "react-redux";

function HelloMessage({ initialMessage }) {
  const [greeting, setGreeting] = React.useState(initialMessage);

  function onUpdateGreeting(event) {
    setGreeting(event.target.value);
  }

  function onResetGreeting() {
    setGreeting("");
  }

  return (
    <div>
      <input onChange={onUpdateGreeting} value={greeting} />
      <p>{greeting}, World</p>
      <button onClick={onResetGreeting}>Clear</button>
    </div>
  );
}

export default HelloMessage;
