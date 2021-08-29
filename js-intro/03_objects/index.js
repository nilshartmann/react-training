console.log("Please edit index.js");

// Write a new function, "birthday":
//   - This function should get two parameters:
//     1. 'persons', an array with person objects ("name" and "age")
//     2. 'name', a string
//
//   - The function should increase the age of all persons in the array by 1,
//     whose names are corresponds to the passed "name" parameter
//   - The passed array must not be changed (create a copy instead!)
//   - The individual person objects within the array must not be changed (create a copy if necessary!)
//   - If an object in the array contains any other properties (not only 'name' and 'age'),
//     the additional properties should be included in the copy.
//   - Objects whose "name" does not correspond to the passed "name" should be returned unchanged.
//     (not a copy, but the same object).
// EXAMPLES:
// For these persons:
const persons = [
  { name: "Klaus", age: 32 },
  { name: "Susi", age: 34, city: "Hamburg" },
  { name: "Walter", age: 45, address: { city: "Hamburg", street: "Mainstreet" } }
];

// For this:
// const res1 = birthday(persons, "Klaus");
// the return should be:
// [
//   { name: "Klaus", age: 33 },
//   { name: "Susi", age: 34, city: "Hamburg" },
//   { name: "Walter", age: 45, address:  { city: "Hamburg", street: "Mainstreet" } }
// ]

// And for this:
// const res2 = birthday(persons, "Susi");
// this should be the result:
// [
//   { name: "Klaus", age: 32 },
//   { name: "Susi", age: 35, city: "Freiburg" },
//   { name: "Walter", age: 45, address:  { city: "Hamburg", street: "Mainstreet" } }
// ]
