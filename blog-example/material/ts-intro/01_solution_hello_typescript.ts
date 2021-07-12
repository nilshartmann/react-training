// ignoriere die folgende Zeile, nur Workaround für diese Übung:
export default undefined;

// -----------------------------------------------------------------------------------------
// Übung: TypeScript - Ergänze die fehlenden Typ-Informationen
//
// +++ Ausführen im TypeScript Playground! +++
//
// -----------------------------------------------------------------------------------------
// Schritt 1: Ergänze alle notwendigen Typ-Information, so dass die Funktion und die beiden
//            folgenden Funktionsaufrufe compilieren.
// -----------------------------------------------------------------------------------------

function sayHello(s: string, n?: number) {
  if (n) {
    console.log(`Hello ${s.toUpperCase()}, you're ${n.toFixed()} years old`);
    return;
  }
  console.log(`Hello ${s.toUpperCase()}`);
}

sayHello("Klaus");
sayHello("Susi", 42);

// -----------------------------------------------------------------------------------------
// Schritt 2: definiere den Typ "PrinterOptions", der den Funktionsparameter
//   beschreibt (s. localPrinterOptions unten), so dass die "Printer"-Funktion,
//   das localPrinterOptions-Object und der untenstehende
//   Funktionsaufruf von "Printer" unten keine Compile-Fehler mehr haben

//  (du kannst entweder 'type' oder 'interface' verwenden)
// -----------------------------------------------------------------------------------------
function Printer(options: PrinterOptions) {
  console.log(`Printing on device ${options.device.toUpperCase()}`);

  options.onPrintFinished(true);
}

// Definiere hier den Typ PrinterOptions (als 'type' oder 'interface')
interface PrinterOptions {
  device: string;
  onPrintFinished(result: boolean): void;
}

const printerOptions: PrinterOptions = {
  device: "lpt1",
  onPrintFinished(result) {
    if (result === true) {
      console.log("Finished success");
    } else {
      console.log("Printing failed");
    }
  }
};

Printer(printerOptions);

// -----------------------------------------------------------------------------------------
// Schritt 3: Kannst Du den Parameter für die Funktion unten so hinschreiben,
//   dass die Funktion nur "yes" oder "no" akzeptiert?
// -----------------------------------------------------------------------------------------
function doYouLikeTypeScript(answer: "yes" | "no") {
  //
}

doYouLikeTypeScript("yes");
doYouLikeTypeScript("no");

// Dieser Aufruf soll weiterhin nicht möglich sein und einen Compile-Fehler erzeugen!
doYouLikeTypeScript("maybe");
