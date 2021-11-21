export default undefined;

// AUFGABEN 🤔:
//
// 1. Modifiziere den Typ "Cat", so dass der nur eine bestimmte Anzahl gültiger Katzennamen zulässt (z.B. "Puffy", "Purry" und "Molly", aber NICHT "Brutus")
//
// 2. Erstelle einen neuen Untertyp von Cat und füge dort die Eigenschaft "topSpeed" hinzu
//
// 3. Schreibe eine Funktion "runCat", die sowohl eine Cat- als auch deinen neuen Untertyp als Parameter akzeptiert
//    Wenn der Parameter "nur" eine Cat ist, gib ihren Namen aus, andernfalls gib mit console.log den Wert von "topSpeed" aus.
//
// 4. Erweiter die Funtkion "runCat", so dass diese auch Instanzen von "Tiger" verarbeiten kann
//   Wenn der Parameter eine Instanz von Tiger ist, rufe run auf

type Cat = {
  name: string;
  meow(): void;
};

// should be allowed:
const purry: Cat = {
  name: "Purry", // cool
  meow() {
    console.log("meow");
  },
};

// should not work
const brutus: Cat = {
  name: "Brutus", // not cool
  meow() {
    console.log("meow");
  },
};

class Tiger {
  run() {
    console.log("runnnn........");
  }
}

// Infos:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
