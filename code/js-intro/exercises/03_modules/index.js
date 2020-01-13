console.log("Please edit index.js");

// TODOs:
// - Move isDefined and isNonEmpty to own module (one module for BOTH functions)
// - Move verify and verifyAll to their own modules in a new folder 'verifier'
//    inside the 'verifier' folder use one module for EACH function, use default export)
// - Add the required imports in this file, so that console.logs at the end of this
//   file work
//
// REMEMBER: when importing JS files add the '.js' suffix:
//   import x from "./x.js";
// (necessary, as this example runs native in the Browser)

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
