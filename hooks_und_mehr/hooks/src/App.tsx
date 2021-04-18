import * as React from "react";
import ClassApp from "./01_classes/ClassApp";
import HooksApp from "./02_hooks/HooksApp";
import HooksAppRendering from "./03_hooks_rendering/HooksAppRendering";
import HooksTimer from "./04_hooks_timer/HooksTimer";
import HooksTimerWithCancel from "./05_hooks_timer_cancel/HooksTimerWithCancel";
import EventHandlerApp from "./06_event_handler/EventHandlerApp";
import CustomHookApp from "./10_custom_hook/CustomHookApp";

export default function App() {
  const [example, setExample] = React.useState(-1);

  const examples = [
    ["Class Example", <ClassApp />],
    ["Hook Example", <HooksApp />],
    ["Hook Example Rendering", <HooksAppRendering />],
    ["Hook Timer", <HooksTimer />],
    ["HooksTimerWithCancel", <HooksTimerWithCancel />],
    ["Event Handler", <EventHandlerApp />],
    ["Custom Hook", <CustomHookApp />]
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
