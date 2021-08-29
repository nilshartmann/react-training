console.log("Please edit index.js");

// Schreibe eine neue Funktion, "birthday":
//    - Diese Funktion soll zwei Parameter bekommen:
//        1. 'persons', ein Array mit Person-Objekten ("name" und "age")
//        2. 'name', ein String
//    - Die Funktion soll das Alter (age) aller Personen in dem Array um 1 erhöhen, deren Namen
//       dem übergebenen "name"-Parameter entspricht
//       - Das übergebene Array soll dabei nicht verändert werden (Kopie anlegen!)
//       - Die einzelnen person-Objekte innerhalb des Arrays sollen nicht verändert werden (ggf. Kopie anlegen!)
//          - Falls ein Objekt in Array beliebige weitere Properties (nicht nur 'name' und 'age') enthält,
//            sollen die zusätzlichen Properties in der Kopie enthalten sein
//       - Objekte, deren "name" nicht dem übergebenen "name" entspricht sollen unverändert zurückgegeben
//         werden (keine Kopie, sondern dasselbe Objekt)
//    BEISPIELE:
// Bei diesen Personen:
const persons = [
  { name: "Klaus", age: 32 },
  { name: "Susi", age: 34, city: "Freiburg" },
  { name: "Walter", age: 45, address: { city: "Freiburg", street: "Mainstreet" } }
];

// Aufruf:
// const res1 = birthday(persons, "Klaus");
// Erwartetes Ergebnis:
// [
//   { name: "Klaus", age: 33 },
//   { name: "Susi", age: 34, city: "Freiburg" },
//   { name: "Walter", age: 45, address:  { city: "Freiburg", street: "Mainstreet" } }
// ]

// Aufruf:
// const res2 = birthday(persons, "Susi");
// Erwartetes Ergebnis:
// [
//   { name: "Klaus", age: 32 },
//   { name: "Susi", age: 35, city: "Freiburg" },
//   { name: "Walter", age: 45, address:  { city: "Freiburg", street: "Mainstreet" } }
// ]
