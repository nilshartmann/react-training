console.log("Please edit index.js");

// GOAL OF THIS EXERCISE:
// ---------------------------------------------
//  We have a generic verify-function that takes in a value
//  and a list of "rules" (functions that checks a value if it meets a
//  condition)
//  The verify function uses the given "rule-functions" to determine
//  if the given value is "correct" (each "rule-function" returned true)
//
//   So you could use this function for example to validate user input
//   (the user input "must not be null" and "must be shorter than X chars")

// STEP 1: Implement two "rule" functions:
//     - the first (isDefined) the checks if the value
//        is "defined" (not null and not undefined),
//     - the second (isNonEmpty) checks if the value is a string that has
//       at least one character
function isDefined(candidate) {
  return candidate !== null && candidate !== undefined;
}

function isNonEmpty(candidate) {
  return typeof candidate === "string" && candidate.length > 0;
}

// Examples STEP 1:
console.log("RESULT isDefined, expected false => ", isDefined(null));
console.log("RESULT isDefined, expected false => ", isDefined(undefined));
console.log("RESULT isDefined, expected false => ", isDefined());
console.log("RESULT isDefined, expected true => ", isDefined(""));
console.log("RESULT isDefined, expected true => ", isDefined("Hello"));

console.log("RESULT isNonEmpty, expected false => ", isNonEmpty(""));
console.log("RESULT isNonEmpty, expected true => ", isNonEmpty("Hello"));

// ------------------------------------------------------------------------------------
// STEP 2: Write the 'verify' function
// The verify-function takes a value and a list (array) of functions that
// should "verify" the given value
//   - If at least one rule failes, the function should return false,
//     otherwise true
// Find examples below

function verify(candidate, rules = [isDefined]) {
  for (let rule of rules) {
    if (!rule(candidate)) return false;
  }

  return true;
}

// EXAMPLES:
console.log("RESULT expected false => ", verify("", [isDefined, isNonEmpty]));
console.log("RESULT expected true  => ", verify("Hello", [isDefined, isNonEmpty]));
console.log("RESULT expected false  => ", verify(null, [isDefined, isNonEmpty]));
console.log("RESULT expected false  => ", verify(undefined, [isDefined, isNonEmpty]));

// ...with Step 2a:
console.log("RESULT expected true => ", verify("", []));
console.log("RESULT expected true => ", verify(""));
console.log("RESULT expected true => ", verify("", null));

// ------------------------------------------------------------------------------------
// STEP 3: Write a 'verifyAll' function, that takes n values and verifies them against a list of rules
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

// EXAMPLE RESULTS FOR STEP 3:

console.log("RESULT expected [false, true] => ", verifyAll(["", "Hello"], [isDefined, isNonEmpty]));
console.log("RESULT expected [true] => ", verifyAll(["Hello"], [isDefined, isNonEmpty]));
console.log(
  "RESULT expected [true, false, false] => ",
  verifyAll(["Hello", null, ""], [isDefined, isNonEmpty])
);
console.log("RESULT expected [false] => ", verifyAll([undefined], [isDefined, isNonEmpty]));

// ------------------------------------------------------------------------------------
// STEP 4: can you implement a "configurable" verifier with a different signature,
//     like atLeastCharsLength(value, minLength) { ... }
// how would you use this verify-Function either with verify oder verifyAll?
function atLeastCharsLength(value, minLength) {
  return value === "string" && value.length >= minLength;
}

const atLeastFiveCharsLength = value => atLeastCharsLength(value, 5);

// EXAMPLES FOR STEP 4:
console.log("RESULT expected true => ", verify("Hello", [atLeastFiveCharsLength]));
console.log("RESULT expected false  => ", verify("Ciao", [atLeastFiveCharsLength]));
