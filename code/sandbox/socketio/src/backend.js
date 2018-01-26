import openSocket from "socket.io-client";

const BACKEND_URL = "http://localhost:7000";

const socket = openSocket(BACKEND_URL);

const subscribeToGreetings = onGreetingsReceivedCallback => {
  // listener for new greetings
  // the greetings object received from server already contains
  // the whole list of greetings
  socket.on("greetings", onGreetingsReceivedCallback);

  // subscribe to changes
  // (on server side when a client subscribes, the server
  //  pushes emits 'greetings' event, so that we immediately
  //  also receive the initial list of greetings)
  socket.emit("subscribeToGreetings");
};

const unsubscribeFromGreetings = () => {
  socket.disconnect();
};

const saveGreeting = greetingToBeAdded => {
  return fetch(`${BACKEND_URL}/greetings`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(greetingToBeAdded)
  }).then(response => {
    if (response.status === 201) {
      return response.json();
    }
    throw new Error("Invalid status code: " + response.status);
  });
};

export { subscribeToGreetings, unsubscribeFromGreetings, saveGreeting };
