export default undefined;

// TASKS 🤔:
// 1. Create a type that allows only a certain set of valid cat names. For example, "Brutus" would not be valid.

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
  }
};

// should not work
const brutus: Cat = {
  name: "Brutus", // not cool
  meow() {
    console.log("meow");
  }
};

// 2. Create a new subtype of Cat adding topSpeed without using extends

type CatAndMore = Cat & {
  topSpeed: number;
};

const fastCat: CatAndMore = {
  name: "Molly",
  topSpeed: 10,
  meow: () => console.log("woooof")
};

// 3. Write a function "runCat" that takes accepts a Cat or your "topSpeed"-cat.
//     If it's "only" a Cat, conolse.log the string "slow cat" otherwise console.log the value of "topSpeed"

function runCat(cat: Cat | CatAndMore) {
  if ("topSpeed" in cat) {
    console.log(cat.topSpeed);
  } else {
    console.log("slow cat");
  }
}

// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
