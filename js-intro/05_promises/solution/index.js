console.log("Please edit index.js");

function createPerson({ name, age = 18 }, additionalData) {
  return { name, age, ...additionalData };
}

const klaus = createPerson({ name: "Klaus", age: 34 });
const susi = createPerson({ name: "Susi" });
const walter = createPerson({ name: "Walter", age: 42 }, { city: "Hamburg", street: "Reeperbahn" });

console.log("klaus", klaus);
console.log("susi", susi);
console.log("walter", walter);

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

const persons = [klaus, susi, walter];

console.log(birthday(persons, "Klaus"));
console.log(birthday(persons, "Susi"));
console.log(birthday(persons, "Walter"));
