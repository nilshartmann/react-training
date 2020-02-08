console.log("Please edit index.js");

// "FACHLICHES" ZIEL DIESER ÜBUNG
// ---------------------------------------------
// Wir haben eine generische "verify"-Funktion, die einen Wert und eine Liste
// von "Regeln" (rules) entgegen nimmt. Eine rules-Funktion prüft, ob ein
// Wert einer bestimmten Bedingung entspricht (z.B. nicht null ist)
//
// Die verify-Funktion benutzt die übergebenen "rule"-Funktionen um zu überprüfen,
// ob der übergebenen WERT "korrekt" ist (also alle übergebenen rule-Funktionen "true"
// zurückgegbeen haben)
//
// Die verify-Funktion könnte zum Beispiel verwendet werden, um User Eingaben zu
// validieren (die Eingabe "darf nicht null sein" und "muss kürzer als X Zeichen sein")
// oder in einem anderen Kontext: "die Eingabe darf nicht null sein",
// "die Eingabe darf nur aus Buchstaben bestehen")

// SCHRITT 1: Implementiere zwei 'rule'-Funktionen:
//     - die erste ("isDefined") prüft, ob der übergebene Wert "defined" ist,
//       also dass er weder null noch undefined ist
//     - die zweite (isNonEmpty) prüft, ob der übergebene Wert ein String ist,
//       der aus mindestens einem Zeichen besteht

// ==> SCHREIBE HIER DIE BEIDEN FUNKTIONEN HIN:

// Beispiele SCHRITT 1:
//  Diese folgenden Aufrufe sollten funktionieren, wenn Du isDefined und isNonEmpty
//  korrekt implementiert hast:
// console.log("RESULT isDefined, expected false => ", isDefined(null));
// console.log("RESULT isDefined, expected false => ", isDefined(undefined));
// console.log("RESULT isDefined, expected false => ", isDefined());
// console.log("RESULT isDefined, expected true => ", isDefined(""));
// console.log("RESULT isDefined, expected true => ", isDefined("Hello"));

// console.log("RESULT isNonEmpty, expected false => ", isNonEmpty(""));
// console.log("RESULT isNonEmpty, expected true => ", isNonEmpty("Hello"));

// ------------------------------------------------------------------------------------
//
// SCHRITT 2: Schreibe die 'verify'-Funktion
//
// Die verify-Funktion nimmt einen beliebigen Wert (value) und ein Array (rules) von
// Funktionen entgegen, die den Wert überprüfen sollen
// Du musst in der Funktion also jede rules-Funktion mit dem Wert aufrufen
//   - Wenn mindestens eine rule-Funktion false zurückliefert, sollte die 'verify'-Funktion
//     ebenfalls false zurückliefern
//   - Wenn alle rule-Funktionen true zurückliefern, soll die verify-Funktion true zurückliefern
//
// ==> SCHREIBE HIER DIE verify-FUNKTION HIN:

// BEISPIELE, die funktionieren sollten, wenn verify korrekt implementiert ist:
// console.log("RESULT expected false => ", verify("", [isDefined, isNonEmpty]));
// console.log("RESULT expected true  => ", verify("Hello", [isDefined, isNonEmpty]));
// console.log("RESULT expected false  => ", verify(null, [isDefined, isNonEmpty]));
// console.log("RESULT expected false  => ", verify(undefined, [isDefined, isNonEmpty]));

// SCHRITT 2a: Modifiziere verify so, dass, wenn der Aufrufer von verify KEINE Regeln
//            übergibt, verify immer die isDefined Regel anwendet
//           (Beispiel: verify("hello")) liefert true zurück
//           (Beispiel: verify(null)) liefert false zurück

// FUNKTIONIERENDE BEISPIELE FÜR 2a:
// console.log("RESULT expected true => ", verify("abc"));
// console.log("RESULT expected true => ", verify(null));

// ------------------------------------------------------------------------------------
// SCHRITT 3: Schreibe eine 'verifyAll'-Funktion, die ein Array mit n Werten entgegen
//   nimmt und diese jeweils gegen die Liste der Regeln überprüft.
//   Die Funktion hat also zwei Paramter: Ein ARRAY von WERTEN und ein ARRAY von rule-
//   Funktionen
//   Für jeden WERT werden ALLE rule-Funktionen aufgerufen.
//   Die Funktion soll ein Array zurückliefern, in dem für jeden übergebenen Wert
//   hinterlegt ist, ob der Wert korrekt war oder nicht:
//    Beispiel:
//    function verifyAll(values, rules) { ... }
//    verifyAll(["Hello", null], [notEmpty]); // [true, false]
//

// ==> SCHREIBE HIER DEINE FUNKTION HIN:

//BEISPIELE FÜR SCHRITT 3:

// console.log("RESULT expected [false, true] => ", verifyAll(["", "Hello"], [isDefined, isNonEmpty]));
// console.log("RESULT expected [true] => ", verifyAll(["Hello"], [isDefined, isNonEmpty]));
// console.log(
//   "RESULT expected [true, false, false] => ",
//   verifyAll(["Hello", null, ""], [isDefined, isNonEmpty])
// );
// console.log("RESULT expected [false] => ", verifyAll([undefined], [isDefined, isNonEmpty]));

// ------------------------------------------------------------------------------------
// SCHRITT 4: isDefined und isNonEmpty haben keine Parameter.
//     Wie könnte eine Regel-Funktion implementiert und verwendet werden,
//     die einen Parameter benötigt?
//     Zum Beispiel: function atLeastCharsLength(value, minLength) { ... }
