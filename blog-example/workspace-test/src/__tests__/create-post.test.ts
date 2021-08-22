import createPost from "../create-post";

test("handles null", () => {
  // Stelle sicher: wenn createPost 'null' übergeben wird, soll auch 'null' zurückkommen
});

test("creates post", () => {
  // Stelle sicher: wenn createPost mit zwei Parametern (Strings) aufgerufen wird,
  // soll daraus ein Blog-Post-Objekt mit "title" und "body" erzeugt werden
});

test("uses slug generator", () => {
  // Erzeuge eine Jest Mock Funktion, die als "Slug-Generator" dient
  //  Die Funktion bekommt von createPost einen Parameter übergeben (den Titel)
  //  und soll einen String zurückliefern
  //  Der zurückgelieferte String steht unter 'slug' im Antwort-Objekt von 'createPost'
  //
  // Übergib "Hello", "World" und deine Mock-Funktion als Parameter an die createPost-Funktion
  //   -  Stelle sicher, dass title und body korrekt sind
  //   -  Stelle sicher, dass das Slug-Propery im Rückgabe-Objekt korrekt ist
  //   - Stelle sicher, dass deine Mock-Funktion mit "Hello" aufgerufen wurde
});
