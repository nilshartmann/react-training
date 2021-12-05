import React from "react";

// The type for your context
type ICounterContext = {
  count: number;
  increase: () => void;
};

// When creating your Context, you can use this
// as a default context value
// (Not needed in many cases, but required by TypeScript...)
const defaultContext: ICounterContext = {
  count: 0,
  increase: () => {}
};

type CounterContextProviderProps = {
  children: React.ReactNode;
};

// TODO: Implement the context

// - Use React.createContext to create a Context-Object
// - Implement the CounterContextProvider-Component that
//   holds the state (counter)
// - The CounterContextProvider should use the Context created with createContext
// - The context should contain the current count and a function (increase)
//   that increases the counter

// After implementing the context, use your Context in App.tsx:
//   - add the provider to your Component hierarchy in App
//   - In CounterWithIncrease and Counter component use your context instead
//     of the dummy code (see todo there)

// When the whole app works with context:
//  add "Header" components to App (see App.tsx)
//  add ContextHeader to <div></div> in CounterContextProvider
//    => the Header components track how often they're re-rendered
//    => can you explain why and when their re-rendered?

export function CounterContextProvider(props: CounterContextProviderProps) {
  // todo implement => provide context
  return <div>{props.children}</div>;
}

// 👮 DAS MACHT IHR BITTE NIE IM "ECHTEN" CODE: 👮
let contextHeaderRenderCounter = 0;
function ContextHeader() {
  contextHeaderRenderCounter = contextHeaderRenderCounter + 1;
  return <h1>Context Header Renderings {contextHeaderRenderCounter}</h1>;
}
