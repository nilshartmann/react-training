export default undefined;
// [P in keyof OBJECT]
// type P1 = keyof Person; // name | age
// type X = Person[name] // string

function buildGreeting() {
  return {
    msg: "Hello",
    person: "Klaus"
  };
}

// Can we determine the type from buildGreeting?
type Greeting = ReturnType<typeof buildGreeting>;

function greet(greeting: Greeting) {
  console.log(`${greeting.msg}, ${greeting.person}`);
}

greet(buildGreeting());

// What whould happen if we return either "Hello" or "Goodbye" and have a type
// that requires this?

type StricterGreeting = {
  msg: "Hello";
  person: string;
};

function stricterGreet(greeting: StricterGreeting) {
  console.log(`${greeting.msg}, ${greeting.person}`);
}

// huch?
stricterGreet(buildGreeting());

// -------------------------------------------------------------------------

type Person = {
  id: string;
  name: string;
  age: number;
  hobby: string;
};

type P<O> = {
  [k in keyof O]?: O[k];
};

class ReactComponent<S> {
  // TODO: we want to allow a subset of Person
  setState(s: P<S>) {
    // we don't care for the implementation
  }
}

const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

const rc = new ReactComponent<Person>();

rc.setState(klaus); // OK - all required props set

const susi = {
  id: "123",
  age: 34
};
rc.setState(susi); // OK: patchPerson expects partial type

// -----------------------------------------------------------------------------------------
//
//  Wir haben eine generische validate-Funktion, die ein Objekt entgegen nimmt,
//     und das Ergebnis der Validierung (true/false) pro Feld zurückgibt

type ValidatedObject<O> = {
  [k in keyof O]: boolean;
};

function validate<O>(object: O): ValidatedObject<O> {
  // @ts-ignore we don't care for the implementation here
  return null;
}

const person = {
  lastname: "Mueller",
  city: "Hamburg"
};
const result = validate(person);

const validLastname: boolean = result.lastname;

const validCity: boolean = result.city;

// -----------------------------------------------------------------------------------------

// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id
// 😱🙋‍♀️🙋‍♂️
type NewPerson = Omit<Person, "id">; // All fields from 'person', but remove "id"

function enterNewPersonForm(): NewPerson {
  // Keine Id hier!
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript"
  };
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/play?q=414#example/mapped-types
