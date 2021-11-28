export default undefined;

//  TypeScript soll einen Compile-Fehler werfen, wenn beim Aufrufen
//  der Funktion der zweite Parameter (Name des Properties) nicht
//  auf ein in dem Objekt vorhandenes Property zeigt:
//  function getSomething(o, prop) {}
//   getSomething({firstname: "Klaus"}, "firstname") // OK
//   getSomething({firstname: "Klaus"}, "lastname") // ERR, lastname nicht im Objekt vorhanden

function getSomething<O extends object>(o: O, p: keyof O) {
  return o[p];
}

const f: string = getSomething({ firstname: "" }, "firstname");
const n: number = getSomething({ fistname: "", age: 32 }, "age");

getSomething({ firstname: "" }, "lastname"); // ERR
getSomething("klaus", ""); // ERR: klaus not an object

// https://www.typescriptlang.org/docs/handbook/2/generics.html
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
