export default undefined;

// TASK 🤔:
// Move in the other direction and build up your type from the bottom instead of reducing them!

// Start with the given function, extract it's return type (as "NewPerson") and then create a the type Person
//  that adds the  missing Property (id) to it
// The following links could be useful
// - ReturnType: https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
// - How to extend a type alias:
// - https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
// - https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types

function enterNewPersonForm() {
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript"
  };
}

type Person = {
  id: string;
};

const klaus: Person = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/play?q=414#example/mapped-types
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
