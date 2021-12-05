// [P in keyof OBJECT]
// type P1 = keyof Person; // name | age
// type X = Person[name] // string
export default undefined;

type Person = {
  id: string;
  name: string;
  age: number;
};

// -----------------------------------------------------------------------------------------
//  BEISPIEL: Ein eigener 'mapped' Type
//
//  Wir haben eine generische validate-Funktion, die ein Objekt entgegen nimmt,
//     und das Ergebnis der Validierung (true/false) pro Feld zurückgibt

function validate<O>(object: O): O {
  // @ts-ignore Implementierung ist nicht so wichtig hier
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
//
// BEISPIEL: UTILITY TYPE #1
//
function patchPerson(person: Person) {
  // Wir wollen eine Untermenge von Person erlauben...
  // außerdem sollte person readonly sein
}

//

// -----------------------------------------------------------------------------------------
//
// BEISPIEL: UTILITY TYPE #2
//
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

// Mapped Types: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// Utility Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
