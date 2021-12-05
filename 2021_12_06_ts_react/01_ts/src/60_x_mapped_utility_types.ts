export default undefined;
// [P in keyof OBJECT]
// type P1 = keyof Person; // name | age
// type X = Person[name] // string

type Person = {
  id: string;
  name: string;
  age: number;
  hobby: string;
};

// -----------------------------------------------------------------------------------------
//  BEISPIEL: Ein eigener 'mapped' Type
//
//  Wir haben eine generische validate-Funktion, die ein Objekt entgegen nimmt,
//     und das Ergebnis der Validierung (true/false) pro Feld zurückgibt

type Validated<O> = {
  [k in keyof O]: boolean;
};

function validate<O extends object>(object: O): Validated<O> {
  // @ts-ignore Implementierung ist nicht so wichtig hier

  return null;
}

const person = {
  lastame: "Mueller",
  city: "Hamburg"
};
const result = validate(person);

// -----------------------------------------------------------------------------------------
//
// BEISPIEL: UTILITY TYPE #1
//
async function patchPerson(p: Readonly<Partial<Person>>) {
  // modifying the object is now forbidden:
  // p.age = 99;  // ERROR

  // send this to our REST API...
  await fetch("/api/person", {
    method: "PATCH",
    body: JSON.stringify(p)
  });
}

const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

patchPerson(klaus); // OK - all required props set

const susi = {
  id: "123",
  age: 34
};
patchPerson(susi); // OK: patchPerson expects partial type

// -----------------------------------------------------------------------------------------
//
// BEISPIEL: UTILITY TYPE #2
//
// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id

type NewPerson = Omit<Person, "id">; // All fields from 'person', but remove "id"

function enterNewPersonForm(): NewPerson {
  // Keine Id hier!
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript"
  };
}

// Mapped Types: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// Utility Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
