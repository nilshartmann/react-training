import React from "react";

export default function App() {
  return <Message message="This message disappears automatically but might be cancelled" />;
}

type MessageProps = {
  message: string;
};

function Message({ message }: MessageProps) {
  const [msgVisible, setMsgVisible] = React.useState(true);
  const idRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const id = window.setTimeout(() => setMsgVisible(false), 2500);
    idRef.current = id;
    return () => {
      clearTimeout(id);
    };
  }, []);

  function handleClick() {
    clearTimeout(idRef.current!);
  }

  if (!msgVisible) {
    return null;
  }

  return (
    <div>
      <button onClick={handleClick}>Show forever</button>
      <h2>{message}</h2>
    </div>
  );
}
