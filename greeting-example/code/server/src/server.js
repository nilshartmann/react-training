const db = require("./db");
const largeData = require("./largedata");
const app = require("./app")(db, largeData);

// clear console
// process.stdout.write(process.platform === "win32" ? "\x1Bc" : "\x1B[2J\x1B[3J\x1B[H");

const port = process.env.SERVER_PORT || 7000;

const webserver = app.listen(port, () => {
  console.log(`  📞    Greeting API Server listening on port ${port}`);
});

const io = require("socket.io")(webserver);

io.on("connection", client => {
  console.log(`  📡    Socket Connection Open with client id ${client.id}`);

  const emitGreetingsFromDb = () => {
    const greetings = db.findAll();
    client.emit("greetings", greetings);
  };

  client.on("subscribeToGreetings", () => {
    console.log(`  🤳    Client subscribed to greetings with id ${client.id}`);

    // subscribe to changes
    db.on("insert", emitGreetingsFromDb);

    // initially emit event with all greetings
    emitGreetingsFromDb();
  });

  client.on("disconnect", () => {
    console.log(`  👋    Client disconnect ${client.id}`);
    db.removeListener("insert", emitGreetingsFromDb);
  });
});
