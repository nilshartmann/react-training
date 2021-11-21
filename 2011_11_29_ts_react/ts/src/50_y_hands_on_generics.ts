export default undefined;

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
