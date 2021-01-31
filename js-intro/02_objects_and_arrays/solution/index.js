console.log("Please edit index.js");

function createPerson(name, age) {
  return { name: name, age: age };
}

const klaus = createPerson("Klaus", 42);
const christian = createPerson("Christian", 48);
const susi = createPerson("Susi", 39);

const persons = [klaus, christian, susi];

// oder "inline":
// const persons = [createPerson("Klaus", 42),createPerson("Christian", 48) ,createPerson("Susi", 39)];

function printPersons(persons) {
  persons.forEach(p => console.log(`Person heisst ${p.name} und ist ${p.age} Jahre alt`));
}

printPersons(persons);

// ZUSATZAUFGABE (statt "printPersonsAdvanced" kannst Du deine printPersons-Funktion erweitern):
function printPersonsAdvanced(persons, formatName) {
  persons.forEach(p => {
    const name = formatName ? formatName(p.name) : p.name;
    console.log(`Person heisst ${name} und ist ${p.age} Jahre alt`);
  });
}

printPersonsAdvanced(persons, name => name.toUpperCase());
