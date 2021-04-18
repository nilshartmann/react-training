export default undefined;

// This function takes a string...

function greet(greeting: string) {
  console.log(greeting);
}

// how can it also take an object for specifing i18n params like a key and params?
//   type Message = { key: string, params: string[] }

// how can we enhance the object with a default locale?
//    { locale: string }
// how can we ensure that the locale is a valid identifier ("de", "en", ...)
// how can we create a factory function that returns the english locale?
