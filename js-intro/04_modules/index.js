console.log("Please edit index.js");

// 1. VERSCHIEBE DIE FOLGENDEN FUNKTIONEN IN EIGENE MODULE
//    createPerson: nach person/createPerson.js. Exportiere createPerson dort mit einem Default Export
//    birthday und greeter: in diesem Verzeichnis in "utils.js". Exportiere sie dort jeweils mit einem
//      benannten Export
// 2. IMPORTIERE die drei Funktionen in dieser Datei
//     Die Datei sollte danach ausführbar sein (wie gewohnt im Browser index.html refreshen)

function createPerson({ name, age = 18 }, additionalData) {
  return { name, age, ...additionalData };
}

function birthday(persons, name) {
  return persons.map(p =>
    p.name === name
      ? {
          ...p,
          age: p.age + 1
        }
      : p
  );
}

function greeter({ name }) {
  console.log(`Hello, ${name}`);
}

const klaus = createPerson({ name: "Klaus", age: 34 });
const susi = createPerson({ name: "Susi" });
const walter = createPerson({ name: "Walter", age: 42 }, { city: "Hamburg", street: "Reeperbahn" });

console.log("klaus", klaus);
console.log("susi", susi);
console.log("walter", walter);
//

const persons = [klaus, susi, walter];

console.log(birthday(persons, "Klaus"));
console.log(birthday(persons, "Susi"));
console.log(birthday(persons, "Walter"));

console.log(greeter(persons[0]));
