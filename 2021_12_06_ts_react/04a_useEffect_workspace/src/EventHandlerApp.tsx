import React from "react";

type Message = {
  key: string;
  msg: string;
};

export default function EventHandlerApp() {
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);

  function clear() {
    setMessages([]);
  }

  // TODO Implement Load More Button
  //   "Load more" should load another message (use executeCallApi, which returns a Promise with a new Message)
  //     and add the message at the beginning of the message list ('messages'-State)

  return (
    <div className="Container">
      <button>Load more</button>
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
