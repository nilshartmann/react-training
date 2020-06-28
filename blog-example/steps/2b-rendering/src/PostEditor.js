import React from "react";

function Text({ text }) {
  return <div className="Border">Text: {text}</div>;
}

function Left({ text }) {
  return (
    <div className="Border Flex_1">
      <h1>Left</h1>
      <Text text={text} />
    </div>
  );
}

function Right({ text }) {
  return (
    <div className="Border Flex_1">
      <h1>Right</h1>
      <Text text={text} />
    </div>
  );
}

export default function PostEditor(props) {
  const [title, setTitle] = React.useState(props.initialTitle || "");
  const [body, setBody] = React.useState(props.initialBody || "");

  const titleRef = React.useRef();
  const clearDisabled = !title && !body;

  function clear() {
    setTitle("");
    setBody("");
    titleRef.current.focus();
  }

  return (
    <>
      <div className="Border">
        <h1>Post Editor</h1>

        <label>
          Title
          <input ref={titleRef} value={title} onChange={e => setTitle(e.currentTarget.value)} />
        </label>

        <label>
          Body
          <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
        </label>

        <button disabled={clearDisabled} onClick={clear}>
          Clear
        </button>

        <div style={{ display: "flex" }}>
          <Left text={title} />
          <Right text={body} />
        </div>
      </div>
    </>
  );
}
