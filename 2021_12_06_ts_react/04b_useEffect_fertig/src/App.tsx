import * as React from "react";
import HooksApp from "./02_hooks/HooksApp";
import HooksAppRendering from "./03_hooks_rendering/HooksAppRendering";
import HooksTimer from "./10_hooks_timer/HooksTimer";
import HooksTimerWithCancel from "./11_hooks_timer_cancel/HooksTimerWithCancel";

export default function App() {
  const [example, setExample] = React.useState(-1);

  const examples = [
    ["Async Example", <HooksApp />],
    ["Hook Example Rendering", <HooksAppRendering />],
    ["Timer", <HooksTimer />],
    ["TimerWithCancel (useRef)", <HooksTimerWithCancel />]
  ];

  return (
    <div>
      <div className="Container">
        {examples.map((ex, ix) => (
          <button
            key={ix}
            className={example === ix ? "Active" : undefined}
            onClick={() => setExample(ix)}
          >
            {ex[0]}
          </button>
        ))}
      </div>

      {example !== -1 && <div className="Container">{examples[example][1]}</div>}
    </div>
  );
}
