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
    hobby: "TypeScript"
  };
}

// klaus sollte eine 'Person' sein
const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

// Erzeuge einen "richtigen" 'User'-Typ (statt 'any') auf Basis
//  des Person - Typs, in dem Du nur die benötigten Properties
//  aus dem Person-Typ auswählst
type User = any;

const user: User = {
  id: "1",
  name: "susi"
};

// 1. Was  passiert, wenn Du für o statt 'any' den Typ 'object' angibst?
//
// 2. Kannst Du einen Record-Typen für 'o' bauen, der so funktioniert, dass die
//     Zeilen unten compilieren
//
function tuWas(o: any) {}

tuWas({ a: "A!" });
tuWas({ n: "Klaus", age: 32 });
tuWas({ 7: "Sieben!" });

// - Kannst Du für 'o' einen Record-Typ bauen, der nur Keys aufnimmt,
//   die entweder 'id' oder 'name' heißen? (wie im User-Type)
// - Kannst Du den Typ so generisch schreiben, dass er automatisch
//   alle Keys erlaubt, die im User-Typ definiert sind?
function handleUser(o: any) {}

// Mapped Types: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// Utility Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
// Typeof Operator: https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// Keyof Operator: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
