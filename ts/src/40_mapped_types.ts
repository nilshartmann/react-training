export default undefined;

function buildGreeting() {
  return {
    msg: "Hello",
    person: "Klaus"
  };
}

// Can we determine the type from buildGreeting?
type Greeting = any;

function greet(greeting: Greeting) {
  console.log(`${greeting.msg}, ${greeting.person}`);
}

// What whould happen if we return either "Hello" or "Goodbye" and have a type
// that requires this?

type StricterGreeting = {
  msg: "Hello" | "Goodbye";
  person: string;
};

function stricterGreet(greeting: StricterGreeting) {
  console.log(`${greeting.msg}, ${greeting.person}`);
}

// @ts-ignore
stricterGreet(buildGreeting());

// -------------------------------------------------------------------------

type Person = {
  id: string;
  name: string;
  age: number;
  hobby: string;
};

class ReactComponent {
  // TODO: we want to allow a subset of Person
  setState(p: Person) {
    // we don't care for the implementation
  }
}

// how can we build ReactComponent and setState so it can take other States?

const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

const rc = new ReactComponent();
rc.setState(klaus); // OK

// ... but how do we use a "part" of the person?
// e.g. to "patch" only the Id and the age?
// 😱🙋‍♀️🙋‍♂️
const susi = {
  id: "123",
  age: 34
};

// @ts-ignore
rc.setState(susi); // ???

// -----------------------------------------------------------------------------------------
//
//  Wir haben eine generische validate-Funktion, die ein Objekt entgegen nimmt,
//     und das Ergebnis der Validierung (true/false) pro Feld zurückgibt

function validate<O>(object: O): O {
  // @ts-ignore we don't care for the implementation here
  return null;
}

const person = {
  lastname: "Mueller",
  city: "Hamburg"
};
const result = validate(person);

// @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
const validLastname: boolean = result.lastname;

// @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
const validCity: boolean = result.city;

// -----------------------------------------------------------------------------------------

// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id

function enterNewPersonForm(): Person {
  // Keine Id hier!
  // @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
  return {
    name: "Klaus",
    age: 32
  };
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
