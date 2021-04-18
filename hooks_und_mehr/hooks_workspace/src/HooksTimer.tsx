import React from "react";

export default function App() {
  return <Message message="This message disappears automatically" />;
}

type MessageProps = {
  message: string;
};

function Message({ message }: MessageProps) {
  return <h2>{message}</h2>;
}
