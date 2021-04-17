import React from "react";

export default function App() {
  return <Message message="This message disappears automatically" />;
}

type MessageProps = {
  message: string;
};

function Message({ message }: MessageProps) {
  const [msgVisible, setMsgVisible] = React.useState(true);

  React.useEffect(() => {
    const id = setTimeout(() => setMsgVisible(false), 2500);
    return () => {
      clearTimeout(id);
    };
  }, []);

  if (!msgVisible) {
    return null;
  }

  return <h2>{message}</h2>;
}
