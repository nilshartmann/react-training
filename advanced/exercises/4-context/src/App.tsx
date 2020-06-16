import React from "react";

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
  // todo: receive increase from your context !
  function increase() {}

  return (
    <div className="Border">
      <button onClick={increase}>Increase!</button>
    </div>
  );
}

function Counter() {
  // todo: receive count from your context
  const count = 0;
  console.log("counter");

  return (
    <div className="Border">
      <p>Count: {count}</p>
    </div>
  );
}

function App() {
  // todo: add your context provider
  return (
    <div className="Border">
      <h1>App Component</h1>
      <Layout />
    </div>
  );
}

export default App;
