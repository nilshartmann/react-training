console.log("Please edit index.js");

// 1. Implementiere die Funktion "createPerson", die zwei Parameter entgegennimmt: name und age
//
//   Die Funktion soll ein Person-Objekt zurückliefern, dass aus diesen beiden Eigenschaften besteht,
//     das Objekt soll also ein 'name' und ein 'age'-Property haben
//
//   Der Default-Wert im zurückgelieferten Objekt für age sollte 18 sein
//
// 2. Implementiere die Funktion "printPersons", die ein Parameter entgegennimmt: persons
//      a) persons soll ein Array von Person-Objekten sein (aus Schritt 1)
//
//      b) Die Funktion soll alle Personen aus dem Array persons "hübsch" als formatierten String ausgeben
//         "Person heisst XXX und ist YYY Jahre alt"
//         Dazu kannst Du die Funktion console.log() verwenden.
//
// 3. Rufe die Funktion mit einem Array von zwei Person-Objekten auf, die Du mit createPerson erzeugt hast
//
//  4. Erweitere printPersons um einen zweiten - optionalen - Parameter, "formatName"
//   - formatName soll eine Funktion sein, die einen String erwartet und einen String zurückliefert
//   - Wenn formatName gesetzt ist, soll die Funktion aufgerufen werden, um den Namen der Person zu "formatieren"
//      Dazu ruft printPersons die formatName-Funktion mit dem Namen der Person auf und verwendet dann
//      den Rückgabe-Wert von 'formatName'
//   - Wenn formatName NICHT gesetzt ist, soll der Name verwendet werden, so wie er im Person-Objekt angegeben ist
//   - Rufe printPersons nun mit den zwei Person-Objekten auf und übergib die fertige "nameFormatter"-Funktion
//   - Schreibe die nameFormatter-Funktion als Pfeil-Funktion um
function createPerson(name, age) {
  // Zurückgeben: ein Person-Objekt mit name und age
}

function printPersons(persons) {
  // Alle übergebenen Person-Objekt formatiert ausgeben
}

function nameFormatter(name) {
  return name.toUpperCase();
}
