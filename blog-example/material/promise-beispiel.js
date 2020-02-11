function readName() {
  return new Promise(resolve => setTimeout(() => resolve("Klaus"), 1000));
}

readName()
  .then(name => `Hello, ${name}`)
  .then(greeting => console.log(greeting));
