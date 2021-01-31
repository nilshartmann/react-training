// Please ignore this line:
export default undefined;

// Definiere einen Typen "Person", der aus den beiden Properties besteht:
//   name: string
//   age: number (optional)

// Schreibe eine Funktion, die ein Person-Objekt als Parameter verwendet
// Verwende Destrukturierung, um age mit 18 vorzubelegen, falls es im Objekt fehlt
// Gib ein neues Objekt zurück, das ebenfalls aus name und age besteht
//   - Wie sieht der von TypeScript hergeleitete Typ des Rückgabewertes aus?
//   - Worin unterscheidet er sich von deinem Person-Typ? Warum?

type Person = {
  name: string;
  age?: number;
};

function createPerson({ name, age = 18 }: Person) {
  return { name, age };
}

const p = createPerson({ name: "Klaus" });
// worin unterscheidet sich der hergeleitete Typ von p von Person
