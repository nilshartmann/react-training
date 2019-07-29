import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

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

// TODO: Verbinde die Komponente mit Redux
//  - lese 'greeting' aus dem Store
//  - uebergebe die beiden Action Creator updateGreeting und resetGreeting
// connect(mapStateToProps, { actions });
// TODO: Zeigen => wie sieht Komponentehierarchie aus?

export default HelloMessage;
