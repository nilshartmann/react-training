export default undefined;
// -----------------------------------------------------------------------------------------
// AUFGABE:
// -----------------------------------------------------------------------------------------
//
// Erstelle den Typ "PrinterOptions", der den 'options'-Paramter der Printer-Funktion
//   beschreibt. (Eine exemplarische Verwendung findest Du weiter unten).
//   Wenn der Typ korrekt ist, sollten keine Compile-Fehler bei der Zuweisung der "localPrinterOptions"
//   Variable mehr auftreten
//   Du PrinterOptions als Interface oder Type Alias definieren.
//
//
// -----------------------------------------------------------------------------------------

function Printer(options: PrinterOptions) {
  console.log(`Printing on device ${options.device.toUpperCase()}`);

  options.onPrintFinished(true);
}

// Define here the type PrinterOptions (as 'type' or 'interface')

const localPrinterOptions: PrinterOptions = {
  device: "lpt1",
  onPrintFinished(result) {
    if (result === true) {
      console.log("Finished success");
    } else {
      console.log("Printing failed");
    }
  },
};

Printer(localPrinterOptions);

// Info:
// Everyday types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// Object Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
// Type Aliase: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
// Interfaces: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
