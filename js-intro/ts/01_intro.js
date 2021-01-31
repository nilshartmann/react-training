// Please ignore this line:
export default undefined;

// Migriere diese Datei auf TypeScript:

// Füge in newPerson die Typ-Angaben hinzu (siehe JS Doc)
// Repariere die weiteren Fehler, die in dieser Datei enthalten sind
//
//  Möglich Lösung in js-intro/ts/01_z_intro_solution.ts

/**
 * @param {string} name  The name
 * @param {number} age The age
 * @param {string|undefined} [hobby] The person's hobby
 */
function newPerson(name, age, hobby) {
  const p = {
    nane,
    age,
    hobby,

    spendTimeWithHobby: hobby ? () => "...doing something..." : null
  };
}

function getAdultAge() {
  return "18";
}

const hans = newPerson("Hans", 34);
console.log(hans.age);

const susi = newPerson("Susi");

const klaus = newPerson("Klaus", 17);
klaus.age = getAdultAge();
klaus.hobby.toLowerCase();
klaus.spendTimeWithHobby();
