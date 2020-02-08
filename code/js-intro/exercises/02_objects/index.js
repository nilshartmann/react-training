console.log("Please edit index.js");

// STEP 1: Erzeuge eine Funktion 'createGreeting', die zwei
//    Parameter entgegen nimmt: 'name' und 'phrase'. Aus diesen
//    beiden Parametern soll die Funktion ein Objekt erzeugen,
//    dass die beiden Werte enthält (als Property 'name' und 'phrase')
//    - Außerdem soll das Objekt eine Funktion enthalten ("greet"),
//      dass einen formatierten String mit name und phrase zurückliefert
//   - Wenn der zweite Parameter ('phrase') nicht angegeben ist,
//     soll automatisch der Wert "Moin" verwendet werden

// Beispiel:
// const c = createGreeting("Klaus", "Hello");
// c.greet(); // Hello, Klaus
// const d = createGreeting("Ussi")
// d.greet(); // Moin, Susi

// SCHRITT 2: Schreibe eine Funktion 'merge', die zwei Parameter entgegen nimmt:
//    - ein Source-Object
//    - ein target-Object
//  Die Funktion soll ein neues Objekt zurückliefern, das aus den Properties
//   BEIDER Objekte besteht.
//
// Beispiel:
// merge({name: "Klaus"}, {age: 32}) => { name: Klaus, age: 32}

// => SCHREIBE HIER DEINE FUNKTION HIN...

const susi = {
  name: "Susi",
  age: 32
};

const address = {
  city: "Freiburg",
  street: "Mainstreet"
};

// ... DANACH SOLLTE DAS HIER FUNKTIONIEREN:
// const result = merge(susi, address);
// console.log("RESULT", result); // { name: Susi, age: 32, city: "Freiburg", street: "Mainstreet"}

// STEP 3: Working with immutable data structures
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
