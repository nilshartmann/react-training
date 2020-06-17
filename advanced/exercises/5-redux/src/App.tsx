import React from "react";
import PostEditor from "PostEditor";

type VIEW = "Editor" | "Confirm";

function App() {
  const [view, setView] = React.useState<VIEW>("Editor");

  return (
    <div className="App">
      {view === "Editor" && <PostEditor onSavePost={() => setView("Confirm")} />}
      {view === "Confirm" && <Confirm />}
    </div>
  );
}

function Confirm() {
  // todo: 1. Read post title from store
  //       2. display post ("Thanks for submitting post with title <TITLE_FROM_STORE>")
  return <h1>Todo...</h1>;
}

export default App;
