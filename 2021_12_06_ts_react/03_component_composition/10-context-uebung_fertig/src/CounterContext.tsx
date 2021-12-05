import React from "react";

type ICounterContext = {
  count: number;
  increase: () => void;
};

const defaultContext: ICounterContext = {
  count: 0,
  increase: () => {}
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

  return (
    <CounterContext.Provider
      value={{
        count: currentCount,
        increase: updateCurrentCount
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

// 👮 DAS MACHT IHR BITTE NIE IM "ECHTEN" CODE: 👮
let contextHeaderRenderCounter = 0;
function ContextHeader() {
  contextHeaderRenderCounter = contextHeaderRenderCounter + 1;
  return <h1>Context Header Renderings {contextHeaderRenderCounter}</h1>;
}
