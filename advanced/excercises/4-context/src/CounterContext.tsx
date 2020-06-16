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

export function CounterContextProvider(props: CounterContextProviderProps) {
  // todo implement => provide context
  return props.children;
}

// TODO: Implement the context

// - Use React.createContext to create a Context-Object
// - Implement the CounterContextProvider-Component that
//   holds the state (counter)
// - The provider should use the Context createad with createContext
// - The context should contain the current count and a function (increase)
//   that increases the counter

// After implementing the context, use your Context in App.tsx:
//   - add the provider to your Component hierarchy in App
//   - In CounterWithIncrease and Counter component use your context instead
//     of the dummy code (see todo there)
