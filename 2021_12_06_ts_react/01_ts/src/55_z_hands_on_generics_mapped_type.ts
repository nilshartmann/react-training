export default undefined;

// Ergänze die Typ-Informationen für die "orderBy"-Funktion ('any' durch sinnvolle Typen ersetzen)
//
// Die Funktion erwartet zwei Parameter:
// - "o" (ein beliebiges Objekt)
// - "criterias": ein Array von Sortierkriterien (s.u.).
//  Du brauchst die Funktion nicht zu implementieren, es geht nur um die Funktionssignatur

//
// - Ein Sortierkriterium soll ein Objekt mit zwei Eigenschaften sein:
//     - column: muss einem Key aus dem zusortierenden Objekt entsprechen
//     - direction: entweder "asc" oder "desc"
//
// Unten findest Du exemplarische Aufrufe der oderBy-Funktion, die (nicht) funktionieren
//  sollen

// Implementiere den Criteria-Typen, der beschreibt, wie eine Eigenschaft aus 'o'
//  zu sortieren ist
type Criteria<O> = {
  column: keyof O;
  direction: "asc" | "desc";
};

// Implementiere die Funktionssignatur mit Generics
function orderBy<O extends object>(o: O, criterias: Array<Criteria<O>>) {}

const susi = {
  firstname: "Susi",
  lastname: "Mueller",
  age: 33
};

orderBy(susi, [
  {
    column: "firstname",
    direction: "desc"
  }
]);

orderBy(susi, [
  {
    column: "firstname",
    direction: "asc"
  },
  {
    column: "lastname",
    direction: "asc"
  }
]);

// ERROR: invalid column
orderBy(susi, [
  {
    column: "notfound",
    direction: "asc"
  }
]);

// ERROR: invalid orderBy
orderBy(susi, [
  {
    column: "lastname",
    direction: "dont_know"
  }
]);

// ERROR: klaus is not an object
orderBy("Klaus", [
  {
    column: "lastname",
    direction: "asc"
  }
]);
