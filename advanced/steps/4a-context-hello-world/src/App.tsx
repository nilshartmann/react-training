import React from "react";

import { CounterContext, CounterContextProvider } from "./CounterContext";

function Layout() {
  console.log("layout!");
  return (
    <div className="Border">
      <h1>Layout Component</h1>
      <Main />
    </div>
  );
}

function Main() {
  console.log("main!");

  return (
    <div className="Border">
      <h1>Main Component</h1>
      <div style={{ display: "flex" }}>
        <Counter />
        <CounterWithIncrease />
      </div>
    </div>
  );
}

function CounterWithIncrease() {
  const { increase, reset } = React.useContext(CounterContext);

  return (
    <div className="Border">
      <button onClick={increase}>Increase!</button>
      <button onClick={reset}>Reset!</button>
    </div>
  );
}

function Counter() {
  const { count } = React.useContext(CounterContext);
  console.log("counter");

  return (
    <div className="Border">
      <p>Count: {count}</p>
    </div>
  );
}

function App() {
  return (
    <div className="Border">
      <h1>App Component</h1>
      <CounterContextProvider>
        <Layout />
      </CounterContextProvider>
    </div>
  );
}

export default App;
