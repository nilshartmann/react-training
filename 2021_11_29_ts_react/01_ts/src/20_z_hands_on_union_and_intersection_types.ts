export default undefined;

// TASKS 🤔:
// 1. Modifiziere den Typ "Cat", so dass der nur eine bestimmte Anzahl gültiger Katzennamen zulässt (z.B. "Puffy", "Purry" und "Molly", aber NICHT "Brutus")

type ValidCatNames = "Puffy" | "Purry" | "Molly";
type Cat = {
  name: ValidCatNames;
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

type CatAndMore = Cat & {
  topSpeed: number;
};

const fastCat: CatAndMore = {
  name: "Molly",
  topSpeed: 10,
  meow: () => console.log("woooof"),
};

class Tiger {
  run() {
    console.log("runnnn........");
  }
}

// 3. Schreibe eine Funktion "runCat", die sowohl eine Cat- als auch deinen neuen Untertyp als Parameter akzeptiert
//    Wenn der Parameter "nur" eine Cat ist, gib ihren Namen aus, andernfalls gib mit console.log den Wert von "topSpeed" aus.
//
// 4. Erweiter die Funtkion "runCat", so dass diese auch Instanzen von "Tiger" verarbeiten kann
//   Wenn der Parameter eine Instanz von Tiger ist, rufe run auf

function runCat(cat: Cat | CatAndMore | Tiger) {
  if (cat instanceof Tiger) {
    console.log(cat.run());
  } else if ("topSpeed" in cat) {
    console.log(cat.topSpeed);
  } else {
    console.log(cat.name);
  }
}

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
