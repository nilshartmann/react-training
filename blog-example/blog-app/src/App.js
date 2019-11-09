import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hands-on</h1>
      </header>

      <h1>Create Post</h1>

      <label>
        Title
        <input type="text" />
      </label>

      <label>
        Body
        <textarea type="text" />
      </label>

      <button>Add Post</button>
    </div>
  );
}

export default App;
