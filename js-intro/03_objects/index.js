console.log("Please edit index.js");

// 1. Schreibe eine neue createPerson-Funktion
//     Diese soll 2 Parameter bekommen, beides Objekte:
//      1. "data": ein Objekt, das mindestens aus "age" und "name" besteht.
//                 Falls age nicht gesetzt ist, soll als alter 18 angenommen werden
//      2. "additional": ein beliebiges weiteres Objekt
//
//     Der Rückgabe-Wert von createPerson soll wie bisher ein Objekt mit name und age sein
//     und zusätzlich auf Root-Ebene alle Eigenschaften von "additional" enthalten.
//     (Außer dem "age" und "name"-Property aus dem data-Objekt sollen KEINE weiteren Properties
//     in das Ziel-Objekt übernommen werden)
//     - Verwende für den "data"-Parameter den Destructuring Operator
//
// BEISPIELE:
//    createPerson({name: "Klaus", age: 34}) => { name: "Klaus", age: 34}
//    createPerson({name: "Susi"}) => { name: "Susi", age: 18}
//    createPerson({name: "Walter", age: 42 }, { city: "Hamburg", street: "Reeperbahn" }) =
//                          => { "name": "Walter", age: 42, city: "Hamburg", street: "Reeperbahn" }

// 2. Schreibe eine neue Funktion, "birthday":
//    - Diese Funktion soll zwei Parameter bekommen:
//        1. 'persons', ein Array mit Objekten, bestehend aus den zwei Properties "name" und "age"
//        2. 'name', ein String
//    - Die Funktion soll das Alter (age) aller Personen in dem Array um 1 erhöhen, deren Namen
//       dem übergebenen "name"-Parameter entspricht
//       - Das Array soll dabei nicht verändert werden (Kopie!)
//       - Die person-Objekte in dem Array sollen nicht verändert werden (Kopie!)
//          - Falls ein Objekt in Array beliebige weitere Properties (nicht nu'name' und 'age') enthält,
//            sollen die zusätzlichen Properties in der Kopie enthalten sein
//       - Objekte, deren "name" nicht dem übergebenen "name" entspricht sollen unverändert zurückgegeben
//         werden
//    BEISPIELE:
// Bei diesen Personen:
const persons = [
  { name: "Klaus", age: 32 },
  { name: "Susi", age: 34, city: "Bonn" },
  { name: "Walter", age: 45, address: { city: "Hamburg", street: "Reeperbahn" } }
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
