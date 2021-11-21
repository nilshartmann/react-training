import React from "react";

type Message = {
  key: string;
  msg: string;
};

export default function EventHandlerApp() {
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);

  async function loadMore() {
    setLoading(true);
    const newMessage = await executeApiCall();
    setLoading(false);
    setMessages([newMessage, ...messages]);
  }

  function clear() {
    setMessages([]);
  }

  return (
    <div className="Container">
      <button onClick={loadMore}>Load more</button>
      <button onClick={clear}>Clear</button>
      {loading && (
        <p>
          <b>Loading new Messages...</b>
        </p>
      )}
      <ul>
        {messages.map(msg => (
          <li key={msg.key}>{msg.msg}</li>
        ))}
      </ul>
    </div>
  );
}

/** Simulates fetch API */
let requestNo = 6;
function executeApiCall(): Promise<Message> {
  const myRequest = requestNo++;
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          key: String(myRequest),
          msg: `I'm Message ${myRequest}`
        }),
      2000
    );
  });
}

const initialMessages: Message[] = [
  { key: "1", msg: "Message 1" },
  { key: "2", msg: "Message 2" },
  { key: "3", msg: "Message 3" },
  { key: "4", msg: "Message 4" },
  { key: "5", msg: "Message 5" }
];
