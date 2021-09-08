// ignore the following line, only workaround for this exercise:
export default undefined;

// -----------------------------------------------------------------------------------------
// Exercise: TypeScript - Fill in the missing type information
//
// +++ Run in the TypeScript Playground! (Link via Chat) +++
//
// -----------------------------------------------------------------------------------------
// Step 1: Add all the necessary type information so that the function and the two
// following function calls compile.
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
// Step 2: define the type "PrinterOptions", which describes the function parameter
//   (see localPrinterOptions below) so that the "Printer" function,
//   the localPrinterOptions object, and the below
//   function call of "Printer" below no longer have compile errors.

//   (you can use either 'type' or 'interface')
// -----------------------------------------------------------------------------------------
function Printer(options: PrinterOptions) {
  console.log(`Printing on device ${options.device.toUpperCase()}`);

  options.onPrintFinished(true);
}

// Define here the type PrinterOptions (as 'type' or 'interface')
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

/// -----------------------------------------------------------------------------------------
// Step 3: Can you write the parameter for the function below,
// that the function only accepts the strings "yes" or "no"?
// -----------------------------------------------------------------------------------------
function doYouLikeTypeScript(answer: "yes" | "no") {
  //
}

doYouLikeTypeScript("yes");
doYouLikeTypeScript("no");

// This call should still not be possible and generate a compile error!
doYouLikeTypeScript("maybe");
