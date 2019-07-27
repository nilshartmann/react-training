import React from "react";
import ReactDOM from "react-dom";

function Counter({ label, value, onResetClick }) {
  console.log(`Render Counter '${label}' with value: ${value}`);
  return (
    <div onClick={onResetClick}>
      Counter {label}: {value}
    </div>
  );
}

function App() {
  const [one, setOne] = React.useState(1);
  const [two, setTwo] = React.useState(100);

  function incrementOne() {
    setOne(one => one + 1);
  }

  function incrementTwo() {
    setTwo(two => two + 100);
  }

  return (
    <div>
      <button onClick={incrementOne}>Increment ONE</button>
      <button onClick={incrementTwo}>Increment TWO</button>

      <Counter label="One" value={one} />
      <Counter label="Two" value={two} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("mount"));
