export default undefined;

// AUFGABE:
//

type SimpleMessage = {
  body: string;
};

type Message = string | SimpleMessage;

class InvalidMessageError extends Error {
  constructor(public invalidMessage: any) {
    super("Invalid Message received!");
  }
}

/**
 * Eine (Callback-)Funktion, die eine Message entgegen nimmt, und nichts zurückliefert
 */
type MessageHandler = (m: Message) => void;

function onMessage(message: unknown, handleMessage: MessageHandler) {
  assertValidMessage(message);

  // Hier sollte es keinen Compile-Fehler geben
  handleMessage(message);
}

function assertValidMessage(message: any): asserts message is Message {
  if (typeof message === "string") {
    return;
  }

  if ("body" in message) {
    return;
  }

  throw new InvalidMessageError(message);
}

function loggingMessageHandler(message: Message) {
  if (isSimpleMessage(message)) {
    console.log(message.body);
  }
  console.log(message);
}

function isSimpleMessage(message: Message): message is SimpleMessage {
  return typeof message === "object" && "body" in message;
}

// Error-Handler, Variante 1: unknown
try {
  onMessage("", loggingMessageHandler);
} catch (err) {
  if (err instanceof InvalidMessageError) {
    console.log(err.invalidMessage);
  }
}

// Error-Handler, Variante 2: any
try {
  onMessage("", loggingMessageHandler);
} catch (err) {
  // Praktisch: keine Prüfung notwendig, aber...
  //  ...haben wir hier wirklich einen InvalidMessageError?
  console.log(err.invalidMessage);
}

// AUFGABE:
// -------------------------------------
//
// Hier haben wir eine Liste, die aus Message-Objekten
//  besteht. Mit dem folgenden 'filter'-Aufruf erzeugen wir
//  eine Liste, in der nur die SimpleMessage-Objekte vorhanden
//  sein sollen.
//  Kannst Du die Funktion so anpassen, dass Du 'simpleMessages'
//    als SimpleMessage[] deklarieren kannst, ohne dass es einen
//    Compile-Fehler gibt?
const messages: Message[] = [];

// Variante 1: "inline" Type Predicate
const simpleMessages = messages.filter(
  (message): message is SimpleMessage => typeof message !== "string"
);

// Variante 2: Type Predicate Funktion verwenden
const simpleMessages2: SimpleMessage[] = messages.filter(isSimpleMessage);

// Infos:
// Unknown Type: https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
// Type Predicates: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// Assertion Functions: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
// Beispiel Type Guards: https://www.typescriptlang.org/play?q=29#example/type-guards
