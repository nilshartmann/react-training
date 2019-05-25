import React from "react";

function greetingReducer(oldState, action) {
  console.log("greeintReducer", oldState, action);
  switch (action.type) {
    case "UPDATE_GREETING":
      return {
        ...oldState,
        greeting: action.greeting
      };
    case "UPDATE_NAME":
      return {
        ...oldState,
        name: action.name
      };
    case "RESET":
      return { greeting: "", name: "" };
  }
}

export default function GreetingDetail(props) {
  const [state, dispatch] = React.useReducer(greetingReducer, {
    name: props.initialName,
    greeting: props.initialGreeting
  });
  const inputRef = React.useRef();

  console.log("state", state);

  function reset() {
    dispatch({
      type: "RESET"
    });
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        onChange={event =>
          dispatch({
            type: "UPDATE_NAME",
            name: event.target.value
          })
        }
        value={state.name}
        placeholder="Name"
      />

      <input
        onChange={event =>
          dispatch({
            type: "UPDATE_GREETING",
            name: event.target.value
          })
        }
        value={state.greeting}
        name="greeting"
        placeholder="Greeting"
      />

      <button onClick={reset}>Clear</button>
    </div>
  );
}
