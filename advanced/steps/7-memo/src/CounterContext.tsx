import React from "react";

type ICounterContext = {
  count: number;
  increase: () => void;
  reset: () => void;
};

const defaultContext: ICounterContext = {
  count: 0,
  increase: () => {},
  reset: () => {}
};

export const CounterContext = React.createContext<ICounterContext>(defaultContext);

type CounterContextProviderProps = {
  children: React.ReactNode;
};

export function CounterContextProvider(props: CounterContextProviderProps) {
  const [currentCount, setCurrentCount] = React.useState(0);

  function updateCurrentCount() {
    setCurrentCount(c => c + 1);
  }

  function resetCurrentCount() {
    setCurrentCount(0);
  }

  return (
    <CounterContext.Provider
      value={{
        count: currentCount,
        increase: updateCurrentCount,
        reset: resetCurrentCount
      }}
    >
      <div className="Border">
        <h1>Context</h1>
        {props.children}
      </div>
    </CounterContext.Provider>
  );
}
