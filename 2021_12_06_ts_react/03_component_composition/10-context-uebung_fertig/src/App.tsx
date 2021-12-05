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
        <Increase />
      </div>
    </div>
  );
}

function Increase() {
  const { increase } = React.useContext(CounterContext);

  return (
    <div className="Border">
      <button onClick={increase}>Increase!</button>
    </div>
  );
}

// 👮 DAS MACHT IHR BITTE NIE IM "ECHTEN" CODE: 👮
let increaseHeaderRenderCounter = 0;
function IncreaseHeader() {
  increaseHeaderRenderCounter = increaseHeaderRenderCounter + 1;
  return <h1>IncreaseHeader Renderings {increaseHeaderRenderCounter}</h1>;
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

// 👮 DAS MACHT IHR BITTE NIE IM "ECHTEN" CODE: 👮
let appHeaderRenderCounter = 0;
function AppHeader() {
  appHeaderRenderCounter = appHeaderRenderCounter + 1;
  return <h1>App Header Renderings {appHeaderRenderCounter}</h1>;
}

export default App;
