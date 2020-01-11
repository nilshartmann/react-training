console.log("Please edit index.js");

// ######################## VOR OBJEKTEN

// HIER KENNEN WIR:

// FUNKTIONEN
// ARRAYS inkl map und for
// STRINGS
// TRUTHY AND FALSY

// step 1: write a function with one argument
//         it should return true if the argument is a non-empty string

function isDefined(candidate) {
  return candidate !== null && candidate !== undefined;
}

function isNonEmpty(candidate) {
  return typeof candidate === "string" && candidate.length > 0;
}

// step X: write a verify function, that takes a value as first argument
//   and an array of 'rule'-functions
//   The function should verify the value against all rules.
//   If at least one rule failes, the function should return false
//   Otherwise return true

// step X+1: if no rules (empty array or missing rules argument) have been given, the function should return true

function verify(candidate, rules) {
  if (!rules) {
    return true;
  }
  for (rule of rules) {
    if (!rule(candidate)) return false;
  }

  return true;
}

console.log("RESULT expected false => ", verify("", [isDefined, isNonEmpty]));
console.log("RESULT expected true  => ", verify("Hello", [isDefined, isNonEmpty]));
console.log("RESULT expected false  => ", verify(null, [isDefined, isNonEmpty]));
console.log("RESULT expected false  => ", verify(undefined, [isDefined, isNonEmpty]));

// step X+1
console.log("RESULT expected true => ", verify("", []));
console.log("RESULT expected true => ", verify(""));

// step Y: Write a 'verify all' function, that takes n values and verifies them against a list of rules
//         (The rules should be the same for each value)
//    It should return an array where each item in the array matches the verification result
//      from the according value
//    example:
//    function verifyAll(values, rules) { ... }
//    verifyAll(["Hello", null], [notEmpty]); // [true, false]
//
function verifyAll(values, rules) {
  return values.map(value => verify(value, rules));
}

console.log("RESULT expected false => ", verify("", [isDefined, isNonEmpty]));
console.log("RESULT expected true  => ", verify("Hello", [isDefined, isNonEmpty]));
console.log("RESULT expected false  => ", verify(null, [isDefined, isNonEmpty]));
console.log("RESULT expected false  => ", verify(undefined, [isDefined, isNonEmpty]));

// step Y+1
// modify verifyAll: if the first parameter is NOT an array (but a single value)
// it should behave at if the first parameter would be a single-item array with that value
