console.log("Please edit index.js");

// STEP 1: Create a function 'createGreeting' that takes
//         two params ('name' and 'phrase'), and constructs
//         an object with it (keys 'name' and 'phrase')
//         The 2nd. argument ('phrase') should defaul to 'hello'
//         if not set
//
//         The resulting object should contain a function
//         (greet), that returns a formatted greeting string
//         (using both 'name' and 'phrase' property)
//

// EXAMPLE:
// const c = createGreeting("Klaus", "Hello");
// c.greet(); // Hello, Klaus

// STEP 2: Create a function (updateObject), that takes three parameters:
//   1. an object
//   2. a key
//   3. a value
// The function should:
//   - return a copy of object
//   - on the copy there should be a new property (with key and value);

// console.log(
//   'RESULT, expected: { name: "Klaus", age: 32 } => ',
//   updateObject({ name: "Klaus" }, "age", 32)
// );

// STEP 3: Create a function 'merge', that takes two parameters:
//    - a source object
//    - a target object
//  Return an object, that consists of a "flat" copy of the two
//  objects.
//
// Example:
// merge({name: "Klaus"}, {age: 32}) => { name: Klaus, age: 32}

const susi = {
  name: "Susi",
  age: 32
};

const address = {
  city: "Freiburg",
  street: "Mainstreet"
};

// const result = merge(susi, address);
// console.log("RESULT", result); // { name: Susi, age: 32, city: "Freiburg", street: "Mainstreet"}

// STEP 4: Working with immutable data structures
// Write a "birthday" function that takes to arguments:
//     - a have a list with person objects ({name: "...", age: 32 }).
//     -   (the objects might have more properties, but at least those two)
//     - a name (string)
// The function should increase the age of all persons with the given name
// - the list should NOT be modified (but copied instead)
// - the objects that are modified (increased age) should not be modified but copied
//    - if the object has more properties than "name" and "age", these other properties
//      should of course be copied to the new object
// - all other objects should remain the same

// TEST
// Given this persons object:
const persons = [
  { name: "Klaus", age: 32 },
  { name: "Susi", age: 34, city: "Freiburg" },
  { name: "Walter", age: 45, address: { city: "Freiburg", street: "Mainstreet" } }
];

// When
// const res1 = birthday(persons, "Klaus");
// Then EXPECTED RESULT:
// [
//   { name: "Klaus", age: 33 },
//   { name: "Susi", age: 34, city: "Freiburg" },
//   { name: "Walter", age: 45, address:  { city: "Freiburg", street: "Mainstreet" } }
// ]

// When
// const res2 = birthday(persons, "Susi");
// Then EXPECTED RESULT:
// Note: as "persons" should not be modified during the previous call to birthday,
// in this result, Klaus is now 32 again, Susi now 35 but still living in Freiburg!
// [
//   { name: "Klaus", age: 32 },
//   { name: "Susi", age: 35, city: "Freiburg" },
//   { name: "Walter", age: 45, address:  { city: "Freiburg", street: "Mainstreet" } }
// ]
