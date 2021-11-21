export default undefined;

// AUFGABE 🤔:
// Erzeugen einen Typen aus einer Funktion und erweitern diesen
//
//  Erzeuge einen Typen für das Objekt, das enterNewPersonForm zurückliefert
//    - Der Typ soll "NewPerson" heißen
//  Erzeuge einen Typen, der NewPerson um ein id Property erweitert ("Person");
//    - Wenn Du "klaus" als "Person" deklarierst sollten keine Compile-Fehler auftreten

function enterNewPersonForm() {
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript",
  };
}

// klaus sollte eine 'Person' sein
const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!",
};

// Erzeuge einen 'User'-Typ auf Basis des Person-Typs,
//  im dem Du nur die benötigten Properties aus dem Person-Typ
//  auswählst
type User = any;

const user: User = {
  id: "1",
  name: "susi",
};

// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/play?q=414#example/mapped-types

// AUFGABE 🤔:
// Kannst Du eine Funktion schreiben, die ein Objekt entgegennimmt
// und einen zweiten Parameter hat, der den Namen eines Properties
// des Objektes enthält?
//  TypeScript soll einen Compile-Fehler werden, wenn beim Aufrufen
//  der Funktion der zweite Parameter (Name des Properties) nicht
//  auf ein in dem Objekt vorhandenes Property zeigt:
//  function getSomething(o, prop) {}
//   getSomething({firstname: "Klaus"}, "firstname") // OK
//   getSomething({firstname: "Klaus"}, "lastname") // ERR, lastname nicht im Objekt vorhanden
// Zusatz:
//  Kannst Du den 1. Parameter so einschränken, dass nur Objekte (!)
//  erlaubt sind?
//   getSomething("klaus", "firstname"); // ERR = klaus not an object

// https://www.typescriptlang.org/docs/handbook/2/generics.html
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
