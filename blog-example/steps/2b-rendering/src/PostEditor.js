import React from "react";

function Text({ text }) {
  return <div className="Border Text">Text: {text}</div>;
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

function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

const Input = React.forwardRef(function Input(props, ref) {
  return <input {...props} ref={ref} />;
});

function Textarea(props) {
  return <textarea {...props} />;
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
          <Input ref={titleRef} value={title} onChange={e => setTitle(e.currentTarget.value)} />
        </label>

        <label>
          Body
          <Textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
        </label>

        <Button disabled={clearDisabled} onClick={clear}>
          Clear
        </Button>

        <div style={{ display: "flex" }}>
          <Left text={title} />
          <Right text={body} />
        </div>
      </div>
    </>
  );
}
