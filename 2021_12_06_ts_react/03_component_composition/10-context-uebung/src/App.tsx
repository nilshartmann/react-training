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
        <IncreaseButton />
      </div>
    </div>
  );
}

function IncreaseButton() {
  // todo 1: receive increase from your context !
  // todo 2: when everything works: add IncreaseHeader before the button!
  function increase() {}

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
  // todo: receive "count" from your context
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
  // todo 2: when app works: add <AppHeader /> (before <Layout /> component)
  return (
    <div className="Border">
      <h1>App Component</h1>
      <Layout />
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
