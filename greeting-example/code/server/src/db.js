const EventEmitter = require("events");

const INITIAL_GREETINGS = [
  { id: 1, name: "Klaus", greeting: "Moin" },
  { id: 2, name: "Susi", greeting: "Hello!" },
  { id: 3, name: "Max", greeting: "Bonjour" },
  { id: 4, name: "Susi", greeting: "How are you?" },
  { id: 5, name: "Max", greeting: "Bon soir" },
  { id: 6, name: "Felipe", greeting: "Hola, ¿qué tal?" },
  { id: 7, name: "Alex", greeting: "Happy Birthday" },
  { id: 8, name: "Felipe", greeting: "¡buenos días" },
  { id: 9, name: "Paul", greeting: "Wie gehts?" },
  { id: 10, name: "Susi", greeting: "Have a nice day" }
];

class Db extends EventEmitter {
  constructor() {
    super();

    this.initialize();
  }

  initialize() {
    this._greetings = [...INITIAL_GREETINGS];
    this._idCounter = this._greetings.length;
  }

  findById(id) {
    return this._greetings.find(greeting => greeting.id === id);
  }

  findAll() {
    return this._greetings;
  }

  insert(greeting) {
    const newGreeting = {
      id: ++this._idCounter,
      name: greeting.name,
      greeting: greeting.greeting
    };
    this._greetings = [...this._greetings, newGreeting];

    this.emit("insert");

    return newGreeting;
  }
}

const db = new Db();
module.exports = db;
