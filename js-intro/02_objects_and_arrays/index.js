console.log("Please edit index.js");

// 1. implement the function "createPerson" from below, that takes two parameters: name and age
//
//    The function should return a person object consisting of these two properties,
//      the object shall have a 'name' and an 'age' property.
//      The default value for age in the returned object should be 18.
//
// 2. implement the function "printPersons" from below which takes one parameter: persons
//    a) persons should be an array of person objects (from step 1)
//
//    b) The function should print all persons from the array persons "nicely" as a formatted string
//       "Person is called XXX and is YYY years old".
//       You can use the console.log() function for this.
//
// 3. call the function with an array of two person objects that you created with createPerson
//
// 4. extend printPersons with a second - optional - parameter, "formatName".
//    - formatName should be a function that expects a string and returns a string.
//    - If formatName is set, the function shall be called to "format" the person's name.
//
//    To do this, printPersons calls the formatName function with the name of the person and then uses
//      the return value of 'formatName'.
//    - If formatName is NOT set, use the name as it is given in the Person object.
//    - Now call printPersons with the two Person objects and pass the completed "nameFormatter" function.
//    - Rewrite the nameFormatter function as an arrow function

function createPerson(name, age) {
  // return: a person object with name and age
}

function printPersons(persons) {
  // format all given person objects
}

function nameFormatter(name) {
  return name.toUpperCase();
}
