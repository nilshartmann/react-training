export default undefined;

// TASKS 🤔:
// 1. Create a type Cat that allows only a certain set of valid cat names. For example, "Brutus" would not be valid.
// 2. Create a new subtype of Cat and add a property topSpeed
// 3. Write a function "runCat" that takes accepts a Cat or your "topSpeed"-cat.
//     If it's "only" a Cat, conolse.log the string "slow cat" otherwise console.log the value of "topSpeed"

type Cat = {
  name: string;
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

// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
