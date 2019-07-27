import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

function HelloMessage({ initialMessage }) {
  const [greeting, setGreeting] = React.useState(initialMessage);

  function updateGreeting(event) {
    setGreeting(event.target.value);
  }

  function resetGreeting() {
    setGreeting("");
  }

  return (
    <div>
      <input onChange={updateGreeting} value={greeting} />
      <p>{greeting}, World</p>
      <button onClick={resetGreeting}>Clear</button>
    </div>
  );
}

// TODO: Verbinde die Komponente mit Redux
//  - lese 'greeting' aus dem Store
//  - uebergebe die beiden Action Creator updateGreeting und resetGreeting
// connect(mapStateToProps, { actions });
// TODO: Zeigen => wie sieht Komponentehierarchie aus?

export default HelloMessage;
