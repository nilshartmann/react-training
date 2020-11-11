import React from "react";

type OneProps = {
  value: number;
};

function One({ value }: OneProps) {
  console.log("ONE, value: " + value);
  return (
    <div className="Border">
      <h1>One</h1>
      <p>Current: {value}</p>
    </div>
  );
}

type TwoProps = {
  value: number;
};

function Two({ value }: TwoProps) {
  console.log("TWO, value: " + value);
  return (
    <div className="Border">
      <h1>Two</h1>
      <p>Current: {value}</p>
    </div>
  );
}

function App() {
  const [valueOne, setValueOne] = React.useState(0);
  const [valueTwo, setValueTwo] = React.useState(0);

  function incrementOne() {
    setValueOne(valueOne => valueOne + 1);
  }

  function incrementTwo() {
    setValueTwo(valueTwo => valueTwo + 1);
  }

  return (
    <div className="Border">
      <h1>App Component</h1>
      <button onClick={incrementOne}>Increment One</button>
      <button onClick={incrementTwo}>Increment Two</button>
      <div style={{ display: "flex" }}>
        <One value={valueOne} />
        <Two value={valueTwo} />
      </div>
    </div>
  );
}

export default App;
