console.log("Please edit index.js");

// TODOs:
// - Move isDefined and isNonEmpty to own module (one module for BOTH functions)
// - Move verify and verifyAll to their own modules in a new folder 'verifier'
//    inside the 'verifier' folder use one module for EACH function, use default export)
// - Add the required imports in this file, so that console.logs at the end of this
//   file work

import verify from "./verifier/verify.js";
import verifyAll from "./verifier/verifyAll.js";
import { isDefined, isNonEmpty } from "./rules.js";

console.log("RESULT expected false => ", verify("", [isDefined, isNonEmpty]));
console.log("RESULT expected true  => ", verify("Hello", [isDefined, isNonEmpty]));

console.log("RESULT expected [false, true] => ", verifyAll(["", "Hello"], [isDefined, isNonEmpty]));
console.log("RESULT expected [true] => ", verifyAll(["Hello"], [isDefined, isNonEmpty]));
