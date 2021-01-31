// Übung: Promises

// getGreetingFromApi liefert ein Objekt für einen Gruß für den Namen zurück,
// oder einen Fehler wenn kein name angegeben wurde.
// Im Erfolgsfall wird ein Promise zurückgegeben, das zum folgenden
// Objekt aufgelöst wird { phrase: ..., name: ... }

// 1. Vervollständige showGreeting (s.u.)
// 2. rufe zum Testen showGreeting einmal mit einem Namen auf
//    showGreeting("World")
//      => Es sollte erscheinen auf der Konsole: "Hello World"
// 3. rufe zum Testen showGreeting einmal ohne Namen auf
//     showGreeting();
//      => Es sollte erscheinen auf der Konsole: "Must specify name"

function getGreetingFromApi(name) {
  if (!name) {
    return Promise.reject("Must specify name");
  }
  return Promise.resolve({
    phrase: "Hello",
    name
  });
}

function showGreeting(name) {
  getGreetingFromApi(name)
    .then(object => `${object.phrase} ${object.name}`)
    .then(greeting => console.log(greeting))
    .catch(error => console.error(error));

  // Das Ergebnis von getGreetingFromApi ist ein Promise, das zu einem Objekt aufgelöst wird
  // ({ phrase: ..., name: ... })
  // Verwende zwei then-Funktionen, um das Objekt (1.) in einen String zu verwandeln
  //  und (2.) diesen String dann in auf der Konsole auszugeben
  // Im Fehlerfalle gibt den Fehler auf der Konsole aus
}

showGreeting("Susi");
showGreeting(null);
