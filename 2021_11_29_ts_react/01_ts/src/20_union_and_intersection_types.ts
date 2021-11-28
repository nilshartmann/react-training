export default undefined;

// This function takes a string and logs it...

function greet(greeting: string) {
  console.log(greeting);
}

// STEP 1: how can it also take an object for specifing i18n params like a key and params?
//   type Message = { key: string, params: string[] }

// STEP 2: how can we enhance the object with a default locale?
//    { locale: string }
//
// STEP 2a: how can we ensure that the locale is a valid identifier ("de", "en", ...)
//
// STEP 2b: how can we create a factory function that returns the english locale?
//
// Huch, was werden hier denn für Typen abgeleitet? 🤔🤔🤔
// const x = "Hallo";
// let y = "Hallo";

// Discussion: Type Widening and Type Narrowing
// Discussion: Exact Types
