const p = Promise
  // creates and directly resolves promise
  //     .reject('Promise rejected')
  .resolve("Result from promise")
  .then(x => {
    // this will be printed
    console.log(x);
    // jdfkjdfkd
    throw new Error("Something went wrong");
  })
  .catch(e => console.warn("Oh, Error 1"))
  .then(() => {
    console.log("This will be printed");
  })
  .catch(e => console.warn("Oh, Error"));

// Output:
// Result from promise
// This will be printed
