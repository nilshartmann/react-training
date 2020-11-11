import { observer } from "mobx-react-lite";
import React from "react";

import { StoreProvider, useStore } from "./BlogStore";

const PostEditor = observer(function PostEditor() {
  console.log("PostEditor Render");
  const store = useStore();

  function updateTitle(e: React.ChangeEvent<HTMLInputElement>) {
    store.blogStore.updateTitle(e.currentTarget.value);
  }

  function updateBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    store.blogStore.updateBody(e.currentTarget.value);
  }

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={store.blogStore.title} onChange={updateTitle} />
      </label>

      <label>
        Body
        <textarea value={store.blogStore.body} onChange={updateBody} />
      </label>

      <p>{store.blogStore.titleLength}</p>
    </div>
  );
});

const Post = observer(function Post() {
  console.log("Render Post!");
  const store = useStore().blogStore;
  return (
    <div className="Border">
      <div>{store.title}</div>
      <PostBody />
    </div>
  );
});

const PostBody = observer(function PostBody() {
  console.log("Render PostBody!");
  const store = useStore().blogStore;
  return <div className="Border">{store.body}</div>;
});

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
