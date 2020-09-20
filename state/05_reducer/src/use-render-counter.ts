import React from "react";

const componentCounters: Record<string, number> = {};
/** Dreckiger Workaround, weil die Visualisierung von von memoizierten Komponenten in den React Dev Tools aktuell nicht richtig funktioniert (?) */
export function useRenderCounter(componentName: string) {
  React.useEffect(() => {
    const old = componentCounters[componentName] || 0;
    componentCounters[componentName] = old + 1;

    const label = Object.entries(componentCounters)
      .map(([key, value]) => `Compontent <b>${key}</b> re-rendered <b>${value}</b> times`)
      .join("<br/>");

    const element = document.getElementById("render-counter");
    if (element) {
      element.innerHTML = label;
    }
  });
}
