console.log("Please edit index.js");

// 1. Erzeuge eine Funktion "createPerson", die zwei Parameter entgegennimmt: name und age
//
//   Die Funktion soll ein Objekt zurückliefern, dass aus diesen beiden Eigenschaften besteht
//   Der Default-Wert für age sollte 18 sein
//
// 2. Erzeuge drei Person-Objekte und lege sie in einem Array ab
//
// 3. Schreibe eine Funktion, die ein Array von Person-Objekten erwartet.
//      a) Die Funktion soll heissen: printPersons
//
//      b) Die Funktion soll alle Personen aus dem Array "hübsch" als formatierten String ausgeben
//         "Person heisst XXX und ist YYY Jahre alt"
//         Dazu kannst Du die Funktion console.log() verwenden. Dieser Funktion kannst Du einen
//         String übergeben. Die Funktion gibt den String in der Browser-Konsole aus
//
// Rufe die Funktion mit dem Array der drei Personen auf
//
//  4. Erweitere printPersons um einen zweiten - optionalen - Parameter, "formatName"
//   - formatName soll eine Funktion sein, die einen String erwartet und einen String zurückliefert
//   - Wenn formatName gesetzt ist, soll die Funktion aufgerufen werden, um den Namen der Person zu formatieren
//      Dazu ruft printPersons die formatName-Funktion mit dem Namen der Person auf und verwendet dann
//      den Rückgabe-Wert von 'formatName'
//   - Wenn formatName NICHT gesetzt ist, soll der Name verwendet werden, so wie er im Person-Objekt angegeben ist
//   - Rufe printPersons nun mit den drei Personen auf und übergib eine Funktion, die den Namen in Großbuchstaben
//     ausgibt (name.toUpperCase() kannst Du verwenden, um einen String in Großbuchstaben zu wandeln). Die Funktion
//      soll als Pfeilfunktion implementiert sein.
//
