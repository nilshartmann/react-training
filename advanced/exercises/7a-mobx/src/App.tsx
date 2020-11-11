import React from "react";

import { StoreProvider } from "./BlogStore";

function PostEditor() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function updateTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }

  function updateBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBody(e.currentTarget.value);
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={updateTitle} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={updateBody} />
      </label>
    </div>
  );
}

function Post() {
  return (
    <div className="Border">
      <div>Hier soll der Titel stehen</div>
      <PostBody />
    </div>
  );
}

function PostBody() {
  return <div className="Border">Hier soll der Body stehen</div>;
}

function App() {
  return (
    <StoreProvider>
      <div className="Border">
        <h1>App Component</h1>
        <div style={{ display: "flex" }}>
          <PostEditor />
          <Post />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
