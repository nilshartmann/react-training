console.log("Please edit index.js");

// TODOs:
// - Verschiebe isDefined und isNonEmpty in ein eigenes Modul (EIN Module für BEIDE Funktionen)
// - Verschiebe verify und verifyAll in ein jeweils eigenes Modul im neuen Verzeichnis  'verifier'.
//    In dem 'verifier' Verzeichnis verwende für beide Funktionen ein eigenes Modul (default-export)
// - Füge in dieser Datei die benötigten imports hinzu, so dass die console.log-Ausgaben am Ende
//    der Datei funktionieren
//
// ERINNERUNG: wenn Du JS-Dateien importierst, füge die '.js'-Dateiendnung hinzu:
//   import x from "./x.js";
// (hier nötig, weil das Beispiel in Browser läuft):

function isDefined(candidate) {
  return candidate !== null && candidate !== undefined;
}

function isNonEmpty(candidate) {
  return typeof candidate === "string" && candidate.length > 0;
}

function verify(candidate, rules) {
  if (!rules) {
    return true;
  }
  for (rule of rules) {
    if (!rule(candidate)) return false;
  }

  return true;
}

function verifyAll(values, rules) {
  if (!Array.isArray(values)) {
    values = [values];
  }

  return values.map(value => verify(value, rules));
}

console.log("RESULT expected false => ", verify("", [isDefined, isNonEmpty]));
console.log("RESULT expected true  => ", verify("Hello", [isDefined, isNonEmpty]));

console.log("RESULT expected [false, true] => ", verifyAll(["", "Hello"], [isDefined, isNonEmpty]));
console.log("RESULT expected [true] => ", verifyAll(["Hello"], [isDefined, isNonEmpty]));
