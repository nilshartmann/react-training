export default undefined;

type Person = {
  id: string;
  name: string;
  age: number;
  hobby: string;
};

async function patchPerson(p: Person) {
  // ...how can we make sure that in this function.
  // the passed Person object is not modified?
  // 😱🙋‍♀️🙋‍♂️

  await fetch("/api/person", {
    method: "PATCH",
    body: JSON.stringify(p)
  });
}

const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

patchPerson(klaus); // OK

// ... but how do we use a "part" of the person?
// e.g. to "patch" only the Id and the age?
// 😱🙋‍♀️🙋‍♂️
const susi = {
  id: "123",
  age: 34
};
// @ts-ignore
patchPerson(susi); // ???

// -----------------------------------------------------------------------------------------

// ...For a form to enter a new person we need a Person object
// but without 'id' field (because this will be assigned later)
// -> how do we create a person "without" an id?
// 😱🙋‍♀️🙋‍♂️
type NewPerson = Person; // ... but without Id field ?!?!?!

function enterNewPersonForm(): NewPerson {
  // No Id here!
  // @ts-ignore
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript"
  };
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html