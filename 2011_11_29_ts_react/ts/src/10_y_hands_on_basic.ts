// Folgende Zeile ignorieren; Workaround für diesen Workspace
export default undefined;

// TODO:
//
//  - Behebe alle Fehler in dieser Datei

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

    spendTimeWithHobby: hobby && (() => "...doing something...")
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
