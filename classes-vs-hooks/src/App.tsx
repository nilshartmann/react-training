import * as React from "react";
import ClassApp from "./classes/ClassApp";
import HooksApp from "./hooks/HooksApp";
import HooksAppAsync from "./hooks_rendering/HooksAppRendering";
import HooksTimer from "./hooks_timer/HooksTimer";
import HooksTimerWithCancel from "./hooks_timer_cancel/HooksTimerWithCancel";

export default function App() {
  const [example, setExample] = React.useState(-1);

  return (
    <div>
      <div className="Container">
        <button className={example === 0 ? "Active" : undefined} onClick={() => setExample(0)}>
          Class Example
        </button>
        <button className={example === 1 ? "Active" : undefined} onClick={() => setExample(1)}>
          Hook Example
        </button>

        <button className={example === 2 ? "Active" : undefined} onClick={() => setExample(2)}>
          Hook Example Rendering
        </button>
        <button className={example === 3 ? "Active" : undefined} onClick={() => setExample(3)}>
          Hook Timer
        </button>
        <button className={example === 4 ? "Active" : undefined} onClick={() => setExample(4)}>
          Hook Timer with Cancel
        </button>
      </div>
      <div className="Container">
        {example === 0 && <ClassApp />}
        {example === 1 && <HooksApp />}
        {example === 2 && <HooksAppAsync />}
        {example === 3 && <HooksTimer />}
        {example === 4 && <HooksTimerWithCancel />}
      </div>
    </div>
  );
}
