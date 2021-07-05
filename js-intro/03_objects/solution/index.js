console.log("Please edit index.js");

const klaus = { name: "Klaus", age: 34 };
const susi = { name: "Susi" };
const walter = { name: "Walter", age: 42, city: "Hamburg", street: "Reeperbahn" };

console.log("klaus", klaus);
console.log("susi", susi);
console.log("walter", walter);

function birthday(persons, name) {
  // persons.map sorgt dafür, dass wir ein neues
  // Array erzeugen (übergebenes persons-Array bleibt unverändert)

  // Die jeweiligen person-Objekte werden nur kopiert
  // und angepasst, wenn ihr name dem übergebenen name
  // entspricht. Alle anderen Person-Objekte in dem Array
  // werden direkt zurückgeliefert (keine Notwendigkeit, eine Kopie zu erzeugen)
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
