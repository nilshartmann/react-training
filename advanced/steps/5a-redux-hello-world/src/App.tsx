import React from "react";
import PostEditor from "PostEditor";

type VIEW = "Editor" | "Confirm";

function App() {
  const [view, setView] = React.useState<VIEW>("Editor");

  return (
    <div className="App">
      {view === "Editor" && <PostEditor onSavePost={() => setView("Confirm")} />}
    </div>
  );
}

export default App;
