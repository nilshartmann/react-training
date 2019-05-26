type Alias = { num: number };
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

function foo(arg: Interface): Interface {
  return {
    num: 10
  };
}

const person = { name: "Klaus", age: 37 };

export { Interface, foo };
